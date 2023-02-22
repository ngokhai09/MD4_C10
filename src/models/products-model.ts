import mongoose, { Schema } from "mongoose";

export interface  IProduct{
    name?: string;
    price?: number;
    quantity?: number;
}

let productSchema = new Schema<IProduct>({
    name: String,
    price: Number,
    quantity: Number
});

export const Product = mongoose.model('Product', productSchema);
