import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../users/schemas/user.schema';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private jwtService: JwtService,
    ) { }

    async register(dto: RegisterDto) {
        const exists = await this.userModel.findOne({ email: dto.email });
        if (exists) throw new BadRequestException('Email already in use');

        const hashedPassword = await bcrypt.hash(dto.password, 10);
        const user = await this.userModel.create({ ...dto, password: hashedPassword });

        const token = this.jwtService.sign({ sub: user._id, email: user.email, role: user.role });
        return { token, user: { id: user._id, username: user.username, email: user.email, role: user.role } };
    }

    async login(dto: LoginDto) {
        const user = await this.userModel.findOne({ email: dto.email });
        if (!user) throw new UnauthorizedException('Invalid credentials');

        const matches = await bcrypt.compare(dto.password, user.password);
        if (!matches) throw new UnauthorizedException('Invalid credentials');

        const token = this.jwtService.sign({ sub: user._id, email: user.email, role: user.role });
        return { token, user: { id: user._id, username: user.username, email: user.email, role: user.role } };
    }
}