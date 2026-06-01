import Router from './routes.js';
import * as controller from '../controllers/session.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class SessionRouter extends Router {
    init() {
        this.post('/login', ['PUBLIC'], passportEnum.NOTHING, controller.login);
        this.post('/register', ['PUBLIC'], passportEnum.NOTHING, controller.register);
        this.post('/refresh', ['PUBLIC'], passportEnum.NOTHING, controller.postRefresh);
        this.post('/logout', ['PUBLIC'], passportEnum.JWT, controller.logout);
        this.get('/current', ['PUBLIC'], passportEnum.JWT, controller.getCurrent);
    };
};