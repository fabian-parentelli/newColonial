import { isValidEmail } from "../validations.val.js";
import { ErrorCustom } from "../../utils/custom-exceptions.utils.js";

const register = (body) => {

    const bodyKeys = Object.keys(body);
    const allowedKeys = ['email', 'password', 'name', 'phone', 'location', 'type'];

    if (bodyKeys.length !== allowedKeys.length || !bodyKeys.every(key => allowedKeys.includes(key))) {
        throw new ErrorCustom("El cuerpo de la petición contiene propiedades no permitidas o faltan campos obligatorios.");
    };

    const { email, password, name, phone, city, neighborhood, location, type } = body;

    if (!type || type !== 'register') {
        throw new ErrorCustom("El tipo debe ser 'register'.");
    };

    if (!email || !isValidEmail(email)) {
        throw new ErrorCustom("El email es obligatorio y debe tener un formato válido.");
    };

    if (!password || typeof password !== 'string' || password.trim().length === 0) {
        throw new ErrorCustom("La contraseña es obligatoria.");
    };

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
        throw new ErrorCustom("El nombre es obligatorio.");
    };

    if (!phone || typeof phone !== 'string' || phone.trim().length === 0) {
        throw new ErrorCustom("El teléfono es obligatorio.");
    };

    if (!location || typeof location !== 'object' || Array.isArray(location)) {
        throw new ErrorCustom("La ubicación es obligatoria y debe ser un objeto.");
    };

    const locationKeys = Object.keys(location);
    const allowedLocationKeys = ['city', 'address'];

    if (locationKeys.length !== allowedLocationKeys.length || !locationKeys.every(key => allowedLocationKeys.includes(key))) {
        throw new ErrorCustom("La ubicación solo debe contener las propiedades 'city' y 'address'.");
    };

    if (!location.city || typeof location.city !== 'string' || location.city.trim().length === 0) {
        throw new ErrorCustom("La ciudad en la ubicación es obligatoria.");
    };

    if (!location.address || typeof location.address !== 'string' || location.address.trim().length === 0) {
        throw new ErrorCustom("La dirección en la ubicación es obligatoria.");
    };

    return body;
};

export { register };