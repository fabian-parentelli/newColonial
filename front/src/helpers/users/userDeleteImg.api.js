const url = import.meta.env.VITE_API_URL;

async function userDeleteImgApi(user) {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/user/delete`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { userDeleteImgApi };