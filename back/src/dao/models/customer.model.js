import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const customerCollection = 'customers';

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true, lowercase: true },
    email: { type: String },
    uid: { type: String },
    phone: { type: String },
    area: { type: String },
    address: { type: String },
    observation: { type: String },
    sale: [{ type: String, default: [] }],
    delivery: [{ type: String, default: [] }],
    active: { type: Boolean, default: true },
});

customerSchema.plugin(mongoosePaginate);

export const customerModel = mongoose.model(customerCollection, customerSchema);