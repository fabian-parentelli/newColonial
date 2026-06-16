import { apiFetch } from '../apiFetch.api.js';

const putOrderStatusApi = async (order) => {

    return await apiFetch('/api/order', {
        method: 'PUT',
        body: JSON.stringify(order),
    });

};

export { putOrderStatusApi };
