import { customerManager } from '../dao/manager/index.manager.js';

export default class CustomerRepository {

    postCustomer = async (customer) => {
        const result = await customerManager.postCustomer(customer);
        return result;
    };

    getOne = async (query, get) => {
        const result = await customerManager.getOne(query, get);
        return result;
    };

    getCustomers = async (query, page) => {
        const result = await customerManager.getCustomers(query, page);
        return result;
    };

    update = async (customer) => {
        const result = await customerManager.update(customer);
        return result;
    };

};