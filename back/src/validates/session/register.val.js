import { isValidEmail } from "../validations.val.js";
import { ErrorNotFound } from "../../utils/custom-exceptions.utils.js";

const register = (body) => {
    
    const bodyKeys = Object.keys(body);
    const allowedKeys = ['email', 'password', 'name', 'phone', 'location'];

    if (bodyKeys.length !== allowedKeys.length || !bodyKeys.every(key => allowedKeys.includes(key))) {
        throw new ErrorNotFound("El cuerpo de la petición contiene propiedades no permitidas o faltan campos obligatorios.");
    };

    const { email, password, name, phone, location } = body;

    if (!email || !isValidEmail(email)) {
        throw new ErrorNotFound("El email es obligatorio y debe tener un formato válido.");
    };

    if (!password || typeof password !== 'string' || password.trim().length === 0) {
        throw new ErrorNotFound("La contraseña es obligatoria.");
    };

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
        throw new ErrorNotFound("El nombre es obligatorio.");
    };

    if (!phone || typeof phone !== 'string' || phone.trim().length === 0) {
        throw new ErrorNotFound("El teléfono es obligatorio.");
    };

    if (!location || typeof location !== 'object' || Array.isArray(location)) {
        throw new ErrorNotFound("La ubicación es obligatoria y debe ser un objeto.");
    };

    const locationKeys = Object.keys(location);
    const allowedLocationKeys = ['city', 'address'];

    if (locationKeys.length !== allowedLocationKeys.length || !locationKeys.every(key => allowedLocationKeys.includes(key))) {
        throw new ErrorNotFound("La ubicación solo debe contener las propiedades 'city' y 'address'.");
    };

    if (!location.city || typeof location.city !== 'string' || location.city.trim().length === 0) {
        throw new ErrorNotFound("La ciudad es obligatoria.");
    };

    if (!location.address || typeof location.address !== 'string' || location.address.trim().length === 0) {
        throw new ErrorNotFound("La dirección es obligatoria.");
    };

    return body;
};

export { register };