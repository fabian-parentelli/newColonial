import { apiFetch } from '../apiFetch.api.js';

const getProductsApi = async (obj) => {

    let path = '/api/product?';

    if (obj.page) path += `page=${obj.page}&`;
    if (obj.limit) path += `limit=${obj.limit}&`;
    if (obj.id) path += `id=${obj.id}&`;
    if (obj.brand) path += `brand=${obj.brand}&`;
    if (obj.category) path += `category=${obj.category}&`;
    if (obj.subCategory) path += `subcategory=${obj.subCategory}&`;
    if (obj.notId) path += `notid=${obj.notId}&`;
    if (obj.location) path += `location=${obj.location}&`;
    if (obj.ids) path += `ids=${obj.ids}&`;
    
    if (obj.select !== undefined) path += `select=${obj.select}&`;
    if (obj.active !== undefined) path += `active=${obj.active}&`;

    if (path.endsWith('&')) path = path.slice(0, -1);

    return await apiFetch(path);
};

export { getProductsApi };
