import { apiFetch } from '../apiFetch.api.js';

const postOrderApi = async (order) => {

    return await apiFetch('/api/order', {
        method: 'POST',
        body: JSON.stringify(order),
    });

};

export { postOrderApi };
