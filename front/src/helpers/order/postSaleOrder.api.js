import { apiFetch } from '../apiFetch.api.js';

const postSaleOrderApi = async (order) => {

    return await apiFetch('/api/order/sale', {
        method: 'POST',
        body: JSON.stringify(order),
    });

};

export { postSaleOrderApi };
