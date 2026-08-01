import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PostsService } from '../posts/posts.service';
export declare class UsersService {
    private userModel;
    private postsService;
    constructor(userModel: Model<UserDocument>, postsService: PostsService);
    create(createUserDto: CreateUserDto, imagePath?: string): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto, imagePath?: string): Promise<User>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
