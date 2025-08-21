const url = import.meta.env.VITE_API_URL;

const userGetUsersApi = async (obj) => {

    let urlData = `${url}/api/user?`;
    
    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.active !== undefined) urlData += `active=${obj.active}&`;
    if (obj.id) urlData += `id=${obj.id}&`;     
    if (obj.role) urlData += `role=${obj.role}&`;     
    if (obj.city) urlData += `city=${obj.city}&`;       
    
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

export { userGetUsersApi };