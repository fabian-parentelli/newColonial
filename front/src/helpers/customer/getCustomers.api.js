import { apiFetch } from '../apiFetch.api.js';

const getCustomersApi = async (obj) => {

    let path = '/api/customer?';

    if (obj.page) path += `page=${obj.page}&`;
    if (obj.name) path += `name=${obj.name}&`;
    if (obj.uid) path += `uid=${obj.uid}&`;
    if (obj.area) path += `area=${obj.area}&`;
    if (obj.active !== undefined) path += `active=${obj.active}&`;

    if (path.endsWith('&')) path = path.slice(0, -1);

    return await apiFetch(path);
};

export { getCustomersApi };