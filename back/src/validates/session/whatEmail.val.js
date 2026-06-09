import { isValidEmail } from "../validations.val.js";
import { ErrorNotFound } from "../../utils/custom-exceptions.utils.js";

const whatEmail = (body) => {
    
    const bodyKeys = Object.keys(body);
    const allowedKeys = ['email'];

    if (bodyKeys.length !== allowedKeys.length || !bodyKeys.every(key => allowedKeys.includes(key))) {
        throw new ErrorNotFound("El cuerpo de la petición contiene propiedades no permitidas o faltan campos obligatorios.");
    };

    const { email } = body;

    if (!email || !isValidEmail(email)) {
        throw new ErrorNotFound("El email es obligatorio y debe tener un formato válido.");
    };

    return email;
};

export { whatEmail };