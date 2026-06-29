import { apiFetch } from '../apiFetch.api.js';

const getNoticesApi = async (obj) => {
    let path = '/api/notice?';
    if (obj.page) path += `page=${obj.page}&`;
    if (obj.id) path += `id=${obj.id}&`;
    if (obj.active !== undefined) path += `active=${obj.active}&`;
    if (path.endsWith('&')) path = path.slice(0, -1);
    return await apiFetch(path);
};

export { getNoticesApi };
