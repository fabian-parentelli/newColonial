import Router from './routes.js';
import * as controller from '../controllers/customer.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class CustomerRouter extends Router {
    init() {
        this.post('/', ['ADMIN', 'MASTER'], passportEnum.JWT, controller.postCustomer);
        this.get('/', ['ADMIN', 'MASTER'], passportEnum.JWT, controller.getCustomers);
    };
};
