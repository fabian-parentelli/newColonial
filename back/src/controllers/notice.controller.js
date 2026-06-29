import * as noticeService from '../services/notice.service.js';
import { ErrorCustom } from '../utils/custom-exceptions.utils.js';

const postNotice = async (req, res) => {
    try {
        const result = await noticeService.postNotice({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getNotices = async (req, res) => {
    try {
        const result = await noticeService.getNotices({ ...req.query });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const putNotice = async (req, res) => {
    try {
        const result = await noticeService.putNotice({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getActiveNotices = async (req, res) => {
    try {
        const result = await noticeService.getActiveNotices();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { postNotice, getNotices, putNotice, getActiveNotices };