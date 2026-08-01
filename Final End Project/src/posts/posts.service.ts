import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Post, PostDocument } from './schemas/post.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) { }

    async create(dto: CreatePostDto, userId: string, imageUrls: string[]) {
        return this.postModel.create({
            ...dto,
            author: new Types.ObjectId(userId) as any,
            group: dto.group ? (new Types.ObjectId(dto.group) as any) : null,
            images: imageUrls,
        });
    }
    async findAll() {
        return this.postModel
            .find()
            .populate('author', 'username email profileImage')
            .populate('group', 'name')
            .sort({ createdAt: -1 })
            .exec();
    }

    async findOne(id: string) {
        const post = await this.postModel.findById(id).populate('author', 'username email').exec();
        if (!post) throw new NotFoundException('Post not found');
        return post;
    }

    async update(id: string, dto: UpdatePostDto, user: any) {
        const post = await this.findOne(id);

        if (post.author.toString() !== user.sub && user.role !== 'SuperAdmin') {
            throw new ForbiddenException('Only owner or SuperAdmin can update this post');
        }

        return this.postModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }

    async remove(id: string, user: any) {
        const post = await this.findOne(id);

        if (post.author.toString() !== user.sub && user.role !== 'SuperAdmin') {
            throw new ForbiddenException('Only owner or SuperAdmin can delete this post');
        }

        await this.postModel.findByIdAndDelete(id);
        return { message: 'Post deleted successfully' };
    }
}