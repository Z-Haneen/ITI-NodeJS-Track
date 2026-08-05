import { Injectable, NotFoundException, BadRequestException, Inject, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        @Inject(forwardRef(() => PostsService))
        private postsService: PostsService,
    ) { }

    async create(createUserDto: CreateUserDto, imagePath?: string): Promise<User> {
        const existingUser = await this.userModel.findOne({ email: createUserDto.email });
        if (existingUser) {
            throw new BadRequestException('Email already exists');
        }

        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        const createdUser = new this.userModel({
            ...createUserDto,
            password: hashedPassword,
            image: imagePath || '',
        });

        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().select('-password').exec();
    }

    async findOne(id: string): Promise<User> {
        const user = await this.userModel.findById(id).select('-password').exec();
        if (!user) throw new NotFoundException('User not found');
        return user;
    }

    async update(id: string, updateUserDto: UpdateUserDto, imagePath?: string): Promise<User> {
        if (updateUserDto.password) {
            updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
        }

        const updateData: any = { ...updateUserDto };
        if (imagePath) updateData.image = imagePath;

        const updatedUser = await this.userModel
            .findByIdAndUpdate(id, updateData, { new: true })
            .select('-password')
            .exec();

        if (!updatedUser) throw new NotFoundException('User not found');
        return updatedUser;
    }

    async remove(id: string): Promise<{ message: string }> {
        const user = await this.userModel.findByIdAndDelete(id);
        if (!user) throw new NotFoundException('User not found');

        await this.postsService.deletePostsByAuthor(id);

        return { message: 'User and all related posts deleted successfully' };
    }
}