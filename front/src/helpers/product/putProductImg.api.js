import { apiFetch } from '../apiFetch.api.js';

const putProductImgApi = async (product) => {
    
    return await apiFetch('/api/product/img', {
        method: 'PUT',
        body: product,
    }, true);

};

export { putProductImgApi };
