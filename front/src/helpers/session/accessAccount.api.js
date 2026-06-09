import { apiFetch } from '../apiFetch.api.js';

const accessAccountApi = async (user) => {

    return await apiFetch('/api/session/access_account', {
        method: 'POST',
        body: JSON.stringify(user),
    });
    
};

export { accessAccountApi };