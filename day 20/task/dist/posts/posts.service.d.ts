import { Model, Types } from 'mongoose';
import { Post, PostDocument } from './schemas/post.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { QueryPostDto } from './dto/query-post.dto';
import { UsersService } from '../users/users.service';
export declare class PostsService {
    private postModel;
    private usersService;
    constructor(postModel: Model<PostDocument>, usersService: UsersService);
    create(createPostDto: CreatePostDto, imagePath?: string): Promise<Post>;
    findAll(query: QueryPostDto): Promise<{
        total: number;
        page: number;
        limit: number;
        totalPages: number;
        data: (import("mongoose").Document<unknown, {}, PostDocument, {}, import("mongoose").DefaultSchemaOptions> & Post & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: Types.ObjectId;
        }> & {
            __v: number;
        } & {
            id: string;
        })[];
    }>;
    findOne(id: string): Promise<Post>;
    update(id: string, updatePostDto: UpdatePostDto, imagePath?: string): Promise<Post>;
    remove(id: string): Promise<{
        message: string;
    }>;
    deletePostsByAuthor(authorId: string): Promise<import("mongodb").DeleteResult>;
}
