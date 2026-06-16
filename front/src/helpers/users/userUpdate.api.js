import { apiFetch } from '../apiFetch.api.js';

export const userUpdateApi = async (user) => {

    return await apiFetch('/api/user', {
        method: 'PUT',
        body: JSON.stringify(user),
    });

};
