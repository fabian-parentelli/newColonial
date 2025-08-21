const url = import.meta.env.VITE_API_URL;

const getPublicitiesApi = async (obj) => {

    let urlData = `${url}/api/publicity?`;

    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.limit) urlData += `limit=${obj.limit}&`;
    if (obj.id) urlData += `id=${obj.id}&`;
    if (obj.type) urlData += `type=${obj.type}&`;
    if (obj.active !== undefined) urlData += `active=${obj.active}&`;

    if (urlData.endsWith('&')) urlData = urlData.slice(0, -1);

    const response = await fetch(urlData, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { getPublicitiesApi };