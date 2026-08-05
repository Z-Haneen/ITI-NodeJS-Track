"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const post_schema_1 = require("./schemas/post.schema");
const users_service_1 = require("../users/users.service");
let PostsService = class PostsService {
    postModel;
    usersService;
    constructor(postModel, usersService) {
        this.postModel = postModel;
        this.usersService = usersService;
    }
    async create(createPostDto, imagePath) {
        await this.usersService.findOne(createPostDto.author);
        const createdPost = new this.postModel({
            ...createPostDto,
            image: imagePath || '',
        });
        return createdPost.save();
    }
    async findAll(query) {
        const { search, page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = query;
        const filter = {};
        if (search) {
            filter.title = { $regex: search, $options: 'i' };
        }
        const sortOptions = {};
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
    async findOne(id) {
        const post = await this.postModel.findById(id).populate('author', '-password').exec();
        if (!post)
            throw new common_1.NotFoundException('Post not found');
        return post;
    }
    async update(id, updatePostDto, imagePath) {
        if (updatePostDto.author) {
            await this.usersService.findOne(updatePostDto.author);
        }
        const updateData = { ...updatePostDto };
        if (imagePath)
            updateData.image = imagePath;
        const updatedPost = await this.postModel
            .findByIdAndUpdate(id, updateData, { new: true })
            .populate('author', '-password')
            .exec();
        if (!updatedPost)
            throw new common_1.NotFoundException('Post not found');
        return updatedPost;
    }
    async remove(id) {
        const post = await this.postModel.findByIdAndDelete(id);
        if (!post)
            throw new common_1.NotFoundException('Post not found');
        return { message: 'Post deleted successfully' };
    }
    async deletePostsByAuthor(authorId) {
        return this.postModel.deleteMany({ author: new mongoose_2.Types.ObjectId(authorId) }).exec();
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(post_schema_1.Post.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        users_service_1.UsersService])
], PostsService);
//# sourceMappingURL=posts.service.js.map