import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ObjectIdPipe } from 'src/coomen/pipe/object-id.pipe';
import { AuthGuard } from 'src/coomen/guard/auth.guard';
import { Role } from 'src/coomen/decorators/role/role.decorator';
import { UserRole } from 'src/coomen/util/enums/user.enum';
import { RoleGuard } from 'src/coomen/guard/role.guard';
import { LogTimeInterceptor } from 'src/coomen/interceptors/log-time/log-time.interceptor';

@UseInterceptors(LogTimeInterceptor)
@UseGuards(AuthGuard, RoleGuard)
@Role(UserRole.ADMIN, UserRole.USER)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ObjectIdPipe()) id: string) {
    return await this.userService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userService.remove(id);
  }
}
