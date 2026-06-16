import { apiFetch } from '../apiFetch.api.js';

const postProductApi = async (product) => {
    
    return await apiFetch('/api/product', {
        method: 'POST',
        body: product,
    }, true);

};

export { postProductApi };
