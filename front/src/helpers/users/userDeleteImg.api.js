import { apiFetch } from '../apiFetch.api.js';

async function userDeleteImgApi(user) {

    return await apiFetch('/api/user/delete', {
        method: 'PUT',
        body: JSON.stringify(user),
    });

};

export { userDeleteImgApi };
