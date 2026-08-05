import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import type { Request, Response } from 'express';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { message: string } {
    return this.appService.getHello();
  }
  @Post(':id')
  postHello(
    @Req() req: Request,
    @Body() body: any,
    @Param('id') id: string,
    @Query('hamada') hamada: string,
    // @Headers() headers: any,
    // @Req() { body, query, params },
    @Res() res: Response,
  ) {
    console.log(req.body);
    console.log(body);
    console.log(req.params);
    console.log(id);
    console.log(req.query);
    console.log(hamada);
    return res.status(200).json(this.appService.getHello2(body, id, hamada));
  }
}
