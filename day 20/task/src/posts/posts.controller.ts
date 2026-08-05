import { Controller, Get, Post, Body, Param, Delete, Put, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { QueryPostDto } from './dto/query-post.dto';
import { multerOptions } from '../config/multer.config';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Post()
    @UseInterceptors(FileInterceptor('image', multerOptions))
    create(@Body() createPostDto: CreatePostDto, @UploadedFile() file?: Express.Multer.File) {
        const imagePath = file ? file.path : undefined;
        return this.postsService.create(createPostDto, imagePath);
    }

    @Get()
    findAll(@Query() query: QueryPostDto) {
        return this.postsService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.postsService.findOne(id);
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor('image', multerOptions))
    update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto, @UploadedFile() file?: Express.Multer.File) {
        const imagePath = file ? file.path : undefined;
        return this.postsService.update(id, updatePostDto, imagePath);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.postsService.remove(id);
    }
}