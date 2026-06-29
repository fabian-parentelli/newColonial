import { noticeManager } from '../dao/manager/index.manager.js';

export default class NoticeRepository {

    postNotice = async (notice) => {
        const result = await noticeManager.postNotice(notice);
        return result;
    };

    getNotices = async (query, page) => {
        const result = await noticeManager.getNotices(query, page);
        return result;
    };

    getById = async (id) => {
        const result = await noticeManager.getById(id);
        return result;
    };

    update = async (notice) => {
        const result = await noticeManager.update(notice);
        return result;
    };

    getAll = async () => {
        const result = await noticeManager.getAll();
        return result;
    };

    getActiveByDate = async (today) => {
        const result = await noticeManager.getActiveByDate(today);
        return result;
    };

};
