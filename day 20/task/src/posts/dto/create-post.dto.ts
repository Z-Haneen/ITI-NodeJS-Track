import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsMongoId()
    @IsNotEmpty()
    author: string;
}