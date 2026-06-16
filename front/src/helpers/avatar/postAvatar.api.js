import { apiFetch } from '../apiFetch.api.js';

const postAvatarApi = async (demand) => {

    return await apiFetch('/api/avatar', {
        method: 'POST',
        body: demand,
    }, true);
    
};

export { postAvatarApi };
