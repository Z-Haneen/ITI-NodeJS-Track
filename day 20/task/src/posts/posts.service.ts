import { Injectable, NotFoundException, Inject, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Post, PostDocument } from './schemas/post.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { QueryPostDto } from './dto/query-post.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Post.name) private postModel: Model<PostDocument>,
        @Inject(forwardRef(() => UsersService))
        private usersService: UsersService,
    ) { }

    async create(createPostDto: CreatePostDto, imagePath?: string): Promise<Post> {
        await this.usersService.findOne(createPostDto.author);

        const createdPost = new this.postModel({
            ...createPostDto,
            image: imagePath || '',
        });

        return createdPost.save();
    }

    async findAll(query: QueryPostDto) {
        const { search, page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = query;

        const filter: any = {};
        if (search) {
            filter.title = { $regex: search, $options: 'i' };
        }

        const sortOptions: any = {};
        sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;

        const total = await this.postModel.countDocuments(filter);
        const posts = await this.postModel
            .find(filter)
            .populate('author', '-password')
            .sort(sortOptions)
            .skip((page - 1) * limit)
            .limit(limit)
            .exec();

        return {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            data: posts,
        };
    }

    async findOne(id: string): Promise<Post> {
        const post = await this.postModel.findById(id).populate('author', '-password').exec();
        if (!post) throw new NotFoundException('Post not found');
        return post;
    }

    async update(id: string, updatePostDto: UpdatePostDto, imagePath?: string): Promise<Post> {
        if (updatePostDto.author) {
            await this.usersService.findOne(updatePostDto.author);
        }

        const updateData: any = { ...updatePostDto };
        if (imagePath) updateData.image = imagePath;

        const updatedPost = await this.postModel
            .findByIdAndUpdate(id, updateData, { new: true })
            .populate('author', '-password')
            .exec();

        if (!updatedPost) throw new NotFoundException('Post not found');
        return updatedPost;
    }

    async remove(id: string): Promise<{ message: string }> {
        const post = await this.postModel.findByIdAndDelete(id);
        if (!post) throw new NotFoundException('Post not found');
        return { message: 'Post deleted successfully' };
    }

    async deletePostsByAuthor(authorId: string) {
        return this.postModel.deleteMany({ author: new Types.ObjectId(authorId) as any }).exec();
    }
}