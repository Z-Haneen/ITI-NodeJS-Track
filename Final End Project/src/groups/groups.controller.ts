import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { AuthGuard } from '../common/guards/auth.guard';
import { GetUser } from '../common/decorators/user.decorator';

@Controller('groups')
@UseGuards(AuthGuard)
export class GroupsController {
    constructor(private readonly groupsService: GroupsService) { }

    @Post()
    create(@Body('name') name: string, @GetUser() user: any) {
        return this.groupsService.create(name, user.sub);
    }

    @Get()
    findAll() {
        return this.groupsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.groupsService.findOne(id);
    }
}