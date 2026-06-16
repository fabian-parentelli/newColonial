import { apiFetch } from '../apiFetch.api.js';

const userGetUsersApi = async (obj) => {

    let path = '/api/user?';
    
    if (obj.page) path += `page=${obj.page}&`;
    if (obj.active !== undefined) path += `active=${obj.active}&`;
    if (obj.id) path += `id=${obj.id}&`;     
    if (obj.role) path += `role=${obj.role}&`;     
    if (obj.city) path += `city=${obj.city}&`;       
    
    if (path.endsWith('&')) path = path.slice(0, -1);

    return await apiFetch(path);
};

export { userGetUsersApi };
