import { apiFetch } from '../apiFetch.api.js';

export const userPostApi = async (user) => {

    return await apiFetch('/api/user', {
        method: 'POST',
        body: user,
    }, true);

};