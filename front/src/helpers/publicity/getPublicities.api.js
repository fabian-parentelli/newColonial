import { apiFetch } from '../apiFetch.api.js';

const getPublicitiesApi = async (obj) => {

    let path = '/api/publicity?';

    if (obj.page) path += `page=${obj.page}&`;
    if (obj.limit) path += `limit=${obj.limit}&`;
    if (obj.id) path += `id=${obj.id}&`;
    if (obj.type) path += `type=${obj.type}&`;
    if (obj.active !== undefined) path += `active=${obj.active}&`;

    if (path.endsWith('&')) path = path.slice(0, -1);

    return await apiFetch(path);
};

export { getPublicitiesApi };
