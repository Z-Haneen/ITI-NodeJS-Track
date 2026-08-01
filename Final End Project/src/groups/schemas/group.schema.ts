import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type GroupDocument = Group & Document;

@Schema({ timestamps: true })
export class Group {
    @Prop({ required: true, unique: true })
    name: string;

    @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'User' }] })
    admins: MongooseSchema.Types.ObjectId[];

    @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'User' }] })
    members: MongooseSchema.Types.ObjectId[];

    @Prop({ type: [String], default: ['post'] })
    permissions: string[];
}

export const GroupSchema = SchemaFactory.createForClass(Group);