import { customerRepository } from '../repositories/index.repositories.js';
import { ErrorCustom } from '../utils/custom-exceptions.utils.js';
import { validation } from '../validates/customer/customer.val.js';

const postCustomer = async (body, user) => {
    const customer = validation.postCustomer(body);
    const exist = await customerRepository.getOne({ name: customer.name, phone: customer.phone || undefined }, { _id: 1 });
    if (exist) throw new ErrorCustom('El cliente ya existe');
    const result = await customerRepository.postCustomer(customer);
    if (!result) throw new ErrorCustom('Error al crear el cliente');
    return { status: 'success', result };
};

const getCustomers = async (query) => {
    const { filter, page } = validation.getCustomers(query);
    const result = await customerRepository.getCustomers(filter, page);
    if (!result) throw new ErrorCustom('Error al obtener los clientes');
    return { status: 'success', result };
};

export { postCustomer, getCustomers };