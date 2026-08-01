import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Group, GroupDocument } from './schemas/group.schema';

@Injectable()
export class GroupsService {
    constructor(@InjectModel(Group.name) private groupModel: Model<GroupDocument>) { }

    async create(name: string, userId: string) {
        return this.groupModel.create({
            name,
            admins: [new Types.ObjectId(userId) as any],
            members: [new Types.ObjectId(userId) as any],
        });
    }

    async findAll() {
        return this.groupModel.find().populate('admins members', 'username email').exec();
    }

    async findOne(id: string) {
        const group = await this.groupModel.findById(id).populate('admins members', 'username email').exec();
        if (!group) throw new NotFoundException('Group not found');
        return group;
    }
}