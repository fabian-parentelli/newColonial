import { apiFetch } from '../apiFetch.api.js';

const putProductOppApi = async (password) => {

    return await apiFetch('/api/product/opp', {
        method: 'PUT',
        body: JSON.stringify(password),
    });

};

export { putProductOppApi };
