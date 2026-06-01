import { apiFetch } from '../apiFetch.api.js';

const registerApi = async (user) => {

    return await apiFetch('/api/session/register', {
        method: 'POST',
        body: JSON.stringify(user),
    });

};

export { registerApi };