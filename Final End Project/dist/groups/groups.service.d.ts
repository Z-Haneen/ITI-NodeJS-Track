import { Model, Types } from 'mongoose';
import { Group, GroupDocument } from './schemas/group.schema';
export declare class GroupsService {
    private groupModel;
    constructor(groupModel: Model<GroupDocument>);
    create(name: string, userId: string): Promise<import("mongoose").Document<unknown, {}, GroupDocument, {}, import("mongoose").DefaultSchemaOptions> & Group & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, GroupDocument, {}, import("mongoose").DefaultSchemaOptions> & Group & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, GroupDocument, {}, import("mongoose").DefaultSchemaOptions> & Group & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
}
