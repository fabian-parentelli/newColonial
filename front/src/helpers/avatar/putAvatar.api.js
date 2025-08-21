const url = import.meta.env.VITE_API_URL;

const putAvatarApi = async (id, password) => {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/avatar/${id}/${password}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { putAvatarApi };