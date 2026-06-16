import { apiFetch } from '../apiFetch.api.js';

const putAvatarApi = async (id, password) => {

    return await apiFetch(`/api/avatar/${id}/${password}`, {
        method: 'PUT',
    });
    
};

export { putAvatarApi };
