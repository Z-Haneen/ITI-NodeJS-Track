import 'multer';
import { ConfigService } from '@nestjs/config';
export declare class ImageKitService {
    private configService;
    private imagekit;
    constructor(configService: ConfigService);
    uploadImage(file: Express.Multer.File, folder?: string): Promise<string>;
}
