import { Document, Schema as MongooseSchema } from 'mongoose';
export type GroupDocument = Group & Document;
export declare class Group {
    name: string;
    admins: MongooseSchema.Types.ObjectId[];
    members: MongooseSchema.Types.ObjectId[];
    permissions: string[];
}
export declare const GroupSchema: MongooseSchema<Group, import("mongoose").Model<Group, any, any, any, any, any, Group>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Group, Document<unknown, {}, Group, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Group & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Group, Document<unknown, {}, Group, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Group & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    admins?: import("mongoose").SchemaDefinitionProperty<MongooseSchema.Types.ObjectId[], Group, Document<unknown, {}, Group, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Group & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    members?: import("mongoose").SchemaDefinitionProperty<MongooseSchema.Types.ObjectId[], Group, Document<unknown, {}, Group, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Group & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    permissions?: import("mongoose").SchemaDefinitionProperty<string[], Group, Document<unknown, {}, Group, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Group & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Group>;
