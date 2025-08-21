import { orderRepository } from '../repositories/index.repositories.js';
import { OrderNotFound } from '../utils/custom-exceptions.utils.js';
import { isUserUtils } from "../utils/utilsServices/users.utils.js";

const postOrder = async (body) => {
    const { user, ...rest } = body;
    const isUser = await isUserUtils(user);
    const result = await orderRepository.postOrder({ ...rest, userId: isUser.userId });
    if (!result) throw new OrderNotFound('Error al crear la orden');
    return {
        status: 'success',
        result,
        isUser: body._id ? true : false,
        accesToken: isUser?.accesToken || null
    }
};

const getOrders = async ({ page = 1, userid, active, status }) => {
    const query = {};
    if (userid) query.userId = userid;
    if (status) query.status = status;
    if (active !== undefined) query.active = active;
    const result = await orderRepository.getOrders(query, page);
    if (!result) throw new OrderNotFound('Error al obtener las ordenes');
    return { status: 'success', result };
};

const putStatus = async (body) => {
    const order = await orderRepository.getById(body.orderId);
    if (!order) throw new OrderNotFound('Error al obtener la orden');
    const result = await orderRepository.update({
        ...order, status: body.newStatus,
        active: (body.newStatus === 'delivered' || body.newStatus === 'returned') ? false : true
    });
    if (!result) throw new OrderNotFound('Error al actualizar la orden');
    return { status: 'success', result };
};

export { postOrder, getOrders, putStatus }; 