import { Controller, Get, Post, Body, Param, Delete, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { multerOptions } from '../config/multer.config';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    @UseInterceptors(FileInterceptor('image', multerOptions))
    create(@Body() createUserDto: CreateUserDto, @UploadedFile() file?: Express.Multer.File) {
        const imagePath = file ? file.path : undefined;
        return this.usersService.create(createUserDto, imagePath);
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor('image', multerOptions))
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @UploadedFile() file?: Express.Multer.File) {
        const imagePath = file ? file.path : undefined;
        return this.usersService.update(id, updateUserDto, imagePath);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(id);
    }
}