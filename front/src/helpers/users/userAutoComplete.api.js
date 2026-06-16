import { apiFetch } from '../apiFetch.api.js';

const userAutoCompleteApi = async (obj) => {

    let path = '/api/user/ac?';
    
    if (obj.active !== undefined) path += `active=${obj.active}&`;
    if (obj.seller) path += `seller=${obj.seller}&`;
    
    if (path.endsWith('&')) path = path.slice(0, -1);

    return await apiFetch(path);
};

export { userAutoCompleteApi };
