import { apiFetch } from '../apiFetch.api.js';

const getActiveNoticesApi = async () => {
    return await apiFetch('/api/notice/active');
};

export { getActiveNoticesApi };
