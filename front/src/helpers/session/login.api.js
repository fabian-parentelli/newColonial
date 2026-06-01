import { apiFetch } from '../apiFetch.api.js';

const loginApi = async (user) => {

    return await apiFetch('/api/session/login', {
        method: 'POST',
        body: JSON.stringify(user),
    });

};

export { loginApi };