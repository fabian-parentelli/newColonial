const url = import.meta.env.VITE_API_URL;

const putProductImgApi = async (product) => {
    
    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/product/img`, {
        method: 'PUT',
        body: product,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { putProductImgApi };