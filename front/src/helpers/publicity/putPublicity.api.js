import { apiFetch } from '../apiFetch.api.js';

const putPublicityApi = async (publicity) => {

    return await apiFetch('/api/publicity', {
        method: 'PUT',
        body: JSON.stringify(publicity),
    });

};

export { putPublicityApi };
