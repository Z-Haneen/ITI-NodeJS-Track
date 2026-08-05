import { BadRequestException, Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { UserService } from 'src/user/user.service';
import { UserRole } from 'src/coomen/util/enums/user.enum';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from 'src/user/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async signup(signupDto: SignupDto) {
    const user = await this.userService.create({
      ...signupDto,
      role: UserRole.USER,
    });
    return user;
  }

  async login(loginDto: LoginDto) {
    const user = await this.userService.findByEmail(loginDto.email);
    if (!user) {
      throw new BadRequestException('Invalid email or password');
    }
    const isPasswordCorrect = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if (!isPasswordCorrect) {
      throw new BadRequestException('Invalid email or password');
    }
    const accessToken = await this.genarateToken(user);
    return { token: accessToken, user };
  }
  async genarateToken(user: UserDocument) {
    const payload = { userId: user._id };
    const accessToken = await this.jwtService.signAsync(payload);
    return accessToken;
  }
}
