import { apiFetch } from '../apiFetch.api.js';

const postConfigApi = async (conf) => {

    return await apiFetch('/api/config', {
        method: 'PUT',
        body: JSON.stringify(conf),
    });
    
};

export { postConfigApi };
