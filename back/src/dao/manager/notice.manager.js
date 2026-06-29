import { noticeModel } from '../models/notice.model.js';

export default class Notice {

    postNotice = async (notice) => {
        return await noticeModel.create(notice);
    };

    getNotices = async (query, page) => {
        return await noticeModel.paginate(query, { page, limit: 12, lean: true, sort: { start: -1 } });
    };

    getById = async (id) => {
        return await noticeModel.findById(id).lean();
    };

    update = async (notice) => {
        return await noticeModel.findByIdAndUpdate(notice._id, notice, { lean: true, new: true });
    };

    getAll = async () => {
        return await noticeModel.find({}).lean();
    };

    getActiveByDate = async (today) => {
        return await noticeModel.find({ active: true, start: { $lte: today }, end: { $gte: today } }).lean();
    };

};