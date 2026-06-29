import { apiFetch } from '../apiFetch.api.js';

const postNoticeApi = async (notice) => {
    return await apiFetch('/api/notice', { method: 'POST', body: JSON.stringify(notice) });
};

export { postNoticeApi };
