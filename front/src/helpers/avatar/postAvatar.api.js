const url = import.meta.env.VITE_API_URL;

const postAvatarApi = async (demand) => {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/avatar`, {
        method: 'POST',
        body: demand,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { postAvatarApi };