import { isValidEmail } from "../validations.val.js";
import { ErrorCustom } from "../../utils/custom-exceptions.utils.js";

const login = (body) => {
    
    const bodyKeys = Object.keys(body);
    const allowedKeys = ['email', 'password', 'type'];

    if (bodyKeys.length !== allowedKeys.length || !bodyKeys.every(key => allowedKeys.includes(key))) {
        throw new ErrorCustom("El cuerpo de la petición contiene propiedades no permitidas o faltan campos obligatorios.");
    };

    const { email, password, type } = body;

    if (!type || type !== 'login') {
        throw new ErrorCustom("El tipo debe ser 'login'.");
    };

    if (!email || !isValidEmail(email)) {
        throw new ErrorCustom("El email es obligatorio y debe tener un formato válido.");
    };

    if (!password || typeof password !== 'string' || password.trim().length === 0) {
        throw new ErrorCustom("La contraseña es obligatoria.");
    };

    return body;
};

export { login };