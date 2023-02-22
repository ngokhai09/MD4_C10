import mongoose from "mongoose";
export interface IProduct {
    name?: string;
    price?: number;
    quantity?: number;
}
export declare const Product: mongoose.Model<IProduct, {}, {}, {}, mongoose.Schema<IProduct, mongoose.Model<IProduct, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IProduct>>;
