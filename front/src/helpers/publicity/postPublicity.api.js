import { apiFetch } from '../apiFetch.api.js';

const postPublicityApi = async (publicity) => {
    
    return await apiFetch('/api/publicity', {
        method: 'POST',
        body: publicity,
    }, true);

};

export { postPublicityApi };
