import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;

    @Type(() => Number)
    @IsNumber()
    @Min(1)
    age: number;
}