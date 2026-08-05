import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { QueryPostDto } from './dto/query-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto, file?: Express.Multer.File): Promise<import("./schemas/post.schema").Post>;
    findAll(query: QueryPostDto): Promise<{
        total: number;
        page: number;
        limit: number;
        totalPages: number;
        data: (import("mongoose").Document<unknown, {}, import("./schemas/post.schema").PostDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/post.schema").Post & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        } & {
            id: string;
        })[];
    }>;
    findOne(id: string): Promise<import("./schemas/post.schema").Post>;
    update(id: string, updatePostDto: UpdatePostDto, file?: Express.Multer.File): Promise<import("./schemas/post.schema").Post>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
