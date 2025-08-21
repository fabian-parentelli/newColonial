const url = import.meta.env.VITE_API_URL;

const putOrderStatusApi = async (order) => {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/order`, {
        method: 'PUT',
        body: JSON.stringify(order),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { putOrderStatusApi };