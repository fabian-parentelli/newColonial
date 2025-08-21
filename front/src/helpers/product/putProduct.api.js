const url = import.meta.env.VITE_API_URL;

const putProductApi = async (product) => {
    
    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/product`, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { putProductApi };