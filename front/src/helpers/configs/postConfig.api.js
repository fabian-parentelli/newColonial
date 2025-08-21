const url = import.meta.env.VITE_API_URL;

const postConfigApi = async (conf) => {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/config`, {
        method: 'PUT',
        body: JSON.stringify(conf),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    
    const content = await response.json();
    return content?.data || content;
};

export { postConfigApi };