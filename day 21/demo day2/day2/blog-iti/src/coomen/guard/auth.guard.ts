import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const authToken = request.headers.authorization;
    if (!authToken) {
      throw new UnauthorizedException('you are not logged in');
    }
    const [type, token] = authToken.split(' ');
    if (!token || type !== 'Bearer') {
      console.log('invalid token from type');
      throw new UnauthorizedException('invalid token');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token);
      const user = await this.userService.findOne(payload.userId);
      if (!user) {
        throw new UnauthorizedException('user not found');
      }
      request['user'] = user;
      return true;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        if (error.name === 'TokenExpiredError') {
          throw new UnauthorizedException('Token expired');
        }
      }
      throw new UnauthorizedException('Invalid token');
    }
    return true;
  }
}
