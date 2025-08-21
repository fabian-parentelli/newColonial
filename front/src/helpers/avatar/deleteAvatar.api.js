const url = import.meta.env.VITE_API_URL;

const deleteAvatarApi = async (id, password) => {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/avatar/${id}/${password}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { deleteAvatarApi };