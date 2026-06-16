import { apiFetch } from '../apiFetch.api.js';

const putProductApi = async (product) => {
    
    return await apiFetch('/api/product', {
        method: 'PUT',
        body: JSON.stringify(product),
    });

};

export { putProductApi };
