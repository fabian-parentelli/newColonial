import { apiFetch } from '../apiFetch.api.js';

export const userPutAvatarApi = async (user) => {

    return await apiFetch('/api/user/avatar', {
        method: 'PUT',
        body: JSON.stringify(user),
    });

};
