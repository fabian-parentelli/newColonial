import Router from './routes.js';
import * as noticeController from '../controllers/notice.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class NoticeRouter extends Router {
    init() {
        this.get('/active', ['PUBLIC'], passportEnum.NOTHING, noticeController.getActiveNotices);
        this.post('/', ['MASTER'], passportEnum.JWT, noticeController.postNotice);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, noticeController.getNotices);
        this.put('/', ['MASTER'], passportEnum.JWT, noticeController.putNotice);
    };
};
