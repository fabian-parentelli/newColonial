import { apiFetch } from '../apiFetch.api.js';

async function userDeleteApi(id) {

    return await apiFetch(`/api/user/${id}`, {
        method: 'DELETE',
    });

};

export { userDeleteApi };
