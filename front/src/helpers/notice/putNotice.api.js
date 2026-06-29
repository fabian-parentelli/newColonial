import { apiFetch } from '../apiFetch.api.js';

const putNoticeApi = async (notice) => {
    return await apiFetch('/api/notice', { method: 'PUT', body: JSON.stringify(notice) });
};

export { putNoticeApi };
