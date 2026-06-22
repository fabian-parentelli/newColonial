import * as service from '../services/customer.service.js';
import { ErrorCustom } from '../utils/custom-exceptions.utils.js';

const postCustomer = async (req, res) => {
    try {
        const result = await service.postCustomer({ ...req.body }, req.user);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getCustomers = async (req, res) => {
    try {
        const result = await service.getCustomers({ ...req.query });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { postCustomer, getCustomers };