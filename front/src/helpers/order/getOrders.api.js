import { apiFetch } from '../apiFetch.api.js';

const getOrdersApi = async (obj) => {

    let path = '/api/order?';

    if (obj.page) path += `page=${obj.page}&`;
    if (obj.id) path += `id=${obj.id}&`;
    if (obj.userId) path += `userid=${obj.userId}&`;
    if (obj.status) path += `status=${obj.status}&`;
    if (obj.active !== undefined) path += `active=${obj.active}&`;

    if (path.endsWith('&')) path = path.slice(0, -1);

    return await apiFetch(path);
};

export { getOrdersApi };
