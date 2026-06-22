import { apiFetch } from '../apiFetch.api.js';

const postCustomerApi = async (customer) => {

    return await apiFetch('/api/customer', {
        method: 'POST',
        body: JSON.stringify(customer)
    });

};

export { postCustomerApi };