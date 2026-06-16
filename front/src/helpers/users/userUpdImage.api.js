import { apiFetch } from '../apiFetch.api.js';

export const userUpdateImgApi = async (user) => {

    return await apiFetch('/api/user/image', {
        method: 'PUT',
        body: user,
    }, true);

};
