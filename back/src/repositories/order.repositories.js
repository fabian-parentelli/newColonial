import { orderManager } from '../dao/manager/index.manager.js';

export default class OrderRepository {

    postOrder = async (order) => {
        const result = await orderManager.postOrder(order);
        return result;
    };

    getOrders = async (query, page) => {
        const result = await orderManager.getOrders(query, page);
        return result;
    };

    getById = async (id) => {
        const result = await orderManager.getById(id);
        return result;
    };

    update = async (order) => {
        const result = await orderManager.update(order);
        return result;
    };

};