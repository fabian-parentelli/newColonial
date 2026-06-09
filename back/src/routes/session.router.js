import Router from './routes.js';
import * as controller from '../controllers/session.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class SessionRouter extends Router {
    init() {
        this.post('/', ['PUBLIC'], passportEnum.NOTHING, controller.postSession);
        this.post('/refresh', ['PUBLIC'], passportEnum.NOTHING, controller.postRefresh);
        this.post('/logout', ['PUBLIC'], passportEnum.JWT, controller.logout);
        this.post('/whatemail', ['PUBLIC'], passportEnum.NOTHING, controller.whatEmail);
        this.post('/access_account', ['PUBLIC'], passportEnum.NOTHING, controller.accessAcount);
        this.get('/current', ['PUBLIC'], passportEnum.JWT, controller.getCurrent);
    };
};