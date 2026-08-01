import 'multer';
import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    UseGuards,
    UseInterceptors,
    UploadedFiles,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { AuthGuard } from '../common/guards/auth.guard';
import { GetUser } from '../common/decorators/user.decorator';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Post()
    @UseGuards(AuthGuard)
    @UseInterceptors(FilesInterceptor('images', 5))
    create(
        @Body() dto: CreatePostDto,
        @GetUser() user: any,
        @UploadedFiles() files?: Express.Multer.File[],
    ) {
        const imageUrls = files ? files.map((f) => `/uploads/${f.originalname}`) : [];
        return this.postsService.create(dto, user.sub, imageUrls);
    }

    @Get()
    findAll() {
        return this.postsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.postsService.findOne(id);
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    update(
        @Param('id') id: string,
        @Body() dto: UpdatePostDto,
        @GetUser() user: any,
    ) {
        return this.postsService.update(id, dto, user);
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    remove(@Param('id') id: string, @GetUser() user: any) {
        return this.postsService.remove(id, user);
    }
}