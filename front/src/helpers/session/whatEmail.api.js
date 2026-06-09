import { apiFetch } from '../apiFetch.api.js';

const whatEmailApi = async (email) => {

    return await apiFetch('/api/session/whatemail', {
        method: 'POST',
        body: JSON.stringify(email),
    });
    
};

export { whatEmailApi };