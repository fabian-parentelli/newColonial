const url = import.meta.env.VITE_API_URL;

const putPublicityApi = async (publicity) => {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/publicity`, {
        method: 'PUT',
        body: JSON.stringify(publicity),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { putPublicityApi };