import { customerModel } from '../models/customer.model.js';

export default class User {

    postCustomer = async (customer) => {
        return await customerModel.create(customer);
    };

    getOne = async (query, get = {}) => {
        return await customerModel.findOne(query, get).lean();
    };

    getCustomers = async (query, page) => {
        return await customerModel.paginate(query, { page: page || 1, limit: 12, lean: true, sort: { name: 1 } });
    };

    update = async (customer) => {
        return await customerModel.findByIdAndUpdate(customer._id, customer, { returnDocument: 'after' }).lean();
    };

};