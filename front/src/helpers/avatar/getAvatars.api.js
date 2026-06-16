import { apiFetch } from '../apiFetch.api.js';

const getAvtarsApi = async (obj) => {

    let path = '/api/avatar?';

    if (obj.page) path += `page=${obj.page}&`;
    if (obj.active !== undefined) path += `active=${obj.active}&`;

    if (path.endsWith('&')) path = path.slice(0, -1);

    return await apiFetch(path);
};

export { getAvtarsApi };
