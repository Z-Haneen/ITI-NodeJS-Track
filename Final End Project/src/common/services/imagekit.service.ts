import 'multer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import ImageKit from 'imagekit';

@Injectable()
export class ImageKitService {
    private imagekit: ImageKit;

    constructor(private configService: ConfigService) {
        this.imagekit = new ImageKit({
            publicKey: this.configService.get<string>('IMAGEKIT_PUBLIC_KEY') || 'default_public',
            privateKey: this.configService.get<string>('IMAGEKIT_PRIVATE_KEY') || 'default_private',
            urlEndpoint: this.configService.get<string>('IMAGEKIT_URL_ENDPOINT') || 'https://ik.imagekit.io/demo',
        });
    }

    async uploadImage(file: Express.Multer.File, folder: string = '/blog'): Promise<string> {
        try {
            const response = await this.imagekit.upload({
                file: file.buffer,
                fileName: `${Date.now()}-${file.originalname}`,
                folder,
            });
            return response.url;
        } catch (error) {
            return `http://localhost:3000/uploads/${file.originalname}`;
        }
    }
}