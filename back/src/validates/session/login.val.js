import { isValidEmail } from "../validations.val.js";
import { ErrorNotFound } from "../../utils/custom-exceptions.utils.js";

const login = (body) => {
    
    const bodyKeys = Object.keys(body);
    const allowedKeys = ['email', 'password'];

    if (bodyKeys.length !== allowedKeys.length || !bodyKeys.every(key => allowedKeys.includes(key))) {
        throw new ErrorNotFound("El cuerpo de la petición contiene propiedades no permitidas o faltan campos obligatorios.");
    };

    const { email, password } = body;

    if (!email || !isValidEmail(email)) {
        throw new ErrorNotFound("El email es obligatorio y debe tener un formato válido.");
    };

    if (!password || typeof password !== 'string' || password.trim().length === 0) {
        throw new ErrorNotFound("La contraseña es obligatoria.");
    };

    return body;
};

export { login };