import { apiFetch } from '../apiFetch.api.js';

const getConfigPageApi = async () => {

    return await apiFetch('/api/config');
};

export { getConfigPageApi };
