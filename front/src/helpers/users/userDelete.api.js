const url = import.meta.env.VITE_API_URL;

async function userDeleteApi(id) {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/user/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { userDeleteApi };