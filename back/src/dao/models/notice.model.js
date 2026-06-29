import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const noticeCollection = 'notices';

const noticeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    active: { type: Boolean, default: true }
});

noticeSchema.plugin(mongoosePaginate);

export const noticeModel = mongoose.model(noticeCollection, noticeSchema);