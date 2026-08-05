import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string } {
    return { message: 'Hello World!' };
  }
  getHello2(body: { name: string; age: number }, id: string, hamada: string) {
    return { message: 'Hello World!', body: body, id, hamada };
  }
}
