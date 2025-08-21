const url = import.meta.env.VITE_API_URL;

const putProductOppApi = async (password) => {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/product/opp`, {
        method: 'PUT',
        body: JSON.stringify(password),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { putProductOppApi };
