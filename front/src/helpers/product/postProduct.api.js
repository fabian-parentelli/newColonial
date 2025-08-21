const url = import.meta.env.VITE_API_URL;

const postProductApi = async (product) => {
    
    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/product`, {
        method: 'POST',
        body: product,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { postProductApi };