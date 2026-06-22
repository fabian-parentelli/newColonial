import { isValidEmail, isValidObjectId, normalize } from "../validations.val.js";
import { ErrorCustom } from "../../utils/custom-exceptions.utils.js";

const ALLOWED_KEYS = ['name', 'uid', 'email', 'phone', 'area', 'address', 'observation', 'sale', 'delivery'];

const postCustomer = (body) => {

    const bodyKeys = Object.keys(body);
    const invalidKeys = bodyKeys.filter(k => !ALLOWED_KEYS.includes(k));
    if (invalidKeys.length > 0) {
        throw new ErrorCustom(`Propiedades no permitidas: ${invalidKeys.join(', ')}`);
    };

    const { name, uid, email, phone, area, address, observation, sale, delivery } = body;

    if (!name || typeof name !== 'string') {
        throw new ErrorCustom("El nombre es requerido.");
    };
    const nameNorm = normalize(name);
    if (nameNorm.length < 2) {
        throw new ErrorCustom("El nombre debe tener al menos 2 caracteres.");
    };

    if (uid && !isValidObjectId(uid)) {
        throw new ErrorCustom("El uid no es un ObjectId válido.");
    };

    if (email) {
        if (typeof email !== 'string' || !isValidEmail(email.trim())) {
            throw new ErrorCustom("El email no tiene un formato válido.");
        };
    };

    if (phone && (typeof phone !== 'string' || phone.trim().length < 4)) {
        throw new ErrorCustom("El teléfono no es válido.");
    };

    if (area && typeof area !== 'string') {
        throw new ErrorCustom("El área no es válida.");
    };

    if (address && typeof address !== 'string') {
        throw new ErrorCustom("La dirección no es válida.");
    };

    if (observation && typeof observation !== 'string') {
        throw new ErrorCustom("La observación no es válida.");
    };

    if (sale !== undefined && !Array.isArray(sale)) {
        throw new ErrorCustom("El campo sale debe ser un array de strings.");
    };
    if (sale && !sale.every(s => typeof s === 'string')) {
        throw new ErrorCustom("Todos los elementos de sale deben ser strings.");
    };

    if (delivery !== undefined && !Array.isArray(delivery)) {
        throw new ErrorCustom("El campo delivery debe ser un array de strings.");
    };
    if (delivery && !delivery.every(d => typeof d === 'string')) {
        throw new ErrorCustom("Todos los elementos de delivery deben ser strings.");
    };

    const customer = { name: nameNorm };

    if (uid) customer.uid = uid;
    if (email) customer.email = email.trim().toLowerCase();
    if (phone) customer.phone = phone.trim();
    if (area) customer.area = area.trim();
    if (address) customer.address = address.trim();
    if (observation) customer.observation = observation.trim();
    if (Array.isArray(sale)) customer.sale = sale;
    if (Array.isArray(delivery)) customer.delivery = delivery;

    return customer;
};

export { postCustomer };
