import { apiFetch } from '../apiFetch.api.js';

const deleteOrderApi = async (values) => {

    return await apiFetch(`/api/order/${values.id}/${values.password}`, {
        method: 'DELETE',
    });
    
};

export { deleteOrderApi };
