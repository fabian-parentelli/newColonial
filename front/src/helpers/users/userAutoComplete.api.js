const url = import.meta.env.VITE_API_URL;

const userAutoCompleteApi = async (obj) => {

    let urlData = `${url}/api/user/ac?`;
    
    if (obj.active !== undefined) urlData += `active=${obj.active}&`;
    if (obj.seller) urlData += `seller=${obj.seller}&`;
    
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

export { userAutoCompleteApi };