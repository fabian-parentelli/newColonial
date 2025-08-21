const url = import.meta.env.VITE_API_URL;

const getProductsApi = async (obj) => {

    let urlData = `${url}/api/product?`;

    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.limit) urlData += `limit=${obj.limit}&`;
    if (obj.id) urlData += `id=${obj.id}&`;
    if (obj.brand) urlData += `brand=${obj.brand}&`;
    if (obj.category) urlData += `category=${obj.category}&`;
    if (obj.subCategory) urlData += `subcategory=${obj.subCategory}&`;
    if (obj.notId) urlData += `notid=${obj.notId}&`;
    if (obj.location) urlData += `location=${obj.location}&`;
    if (obj.ids) urlData += `ids=${obj.ids}&`;

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

export { getProductsApi };