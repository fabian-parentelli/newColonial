import { apiFetch } from '../apiFetch.api.js';

const postMessageApi = async (message) => {

    return await apiFetch('/api/message', {
        method: 'POST',
        body: JSON.stringify(message),
    });

};

export { postMessageApi };
