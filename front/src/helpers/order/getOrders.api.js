const url = import.meta.env.VITE_API_URL;

const getOrdersApi = async (obj) => {

    let urlData = `${url}/api/order?`;

    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.userId) urlData += `userid=${obj.userId}&`;
    if (obj.status) urlData += `status=${obj.status}&`;
    if (obj.active !== undefined) urlData += `active=${obj.active}&`;

    if (urlData.endsWith('&')) urlData = urlData.slice(0, -1);

    const token = localStorage.getItem('token');

    const response = await fetch(urlData, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { getOrdersApi };