import { apiFetch } from '../apiFetch.api.js';

const deleteAvatarApi = async (id, password) => {

    return await apiFetch(`/api/avatar/${id}/${password}`, {
        method: 'DELETE',
    });
    
};

export { deleteAvatarApi };
