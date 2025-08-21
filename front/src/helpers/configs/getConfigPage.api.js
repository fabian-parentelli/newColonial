const url = import.meta.env.VITE_API_URL;

const getConfigPageApi = async () => {

    const response = await fetch(`${url}/api/config`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    });
    
    const content = await response.json();
    return content?.data || content;
};

export { getConfigPageApi };