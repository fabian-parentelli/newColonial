const url = import.meta.env.VITE_API_URL;

const deleteOrderApi = async (values) => {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/order/${values.id}/${values.password}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { deleteOrderApi };