const url = import.meta.env.VITE_API_URL;

const postOrderApi = async (order) => {

    const response = await fetch(`${url}/api/order`, {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { postOrderApi };