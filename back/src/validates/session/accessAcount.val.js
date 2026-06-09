import { isValidObjectId } from "../validations.val.js";
import { ErrorNotFound } from "../../utils/custom-exceptions.utils.js";

const accessAcount = (body) => {
    
    const bodyKeys = Object.keys(body);
    const allowedKeys = ['otp', 'password', 'id'];

    if (bodyKeys.length !== allowedKeys.length || !bodyKeys.every(key => allowedKeys.includes(key))) {
        throw new ErrorNotFound("El cuerpo de la petición contiene propiedades no permitidas o faltan campos obligatorios.");
    };

    const { otp, password, id } = body;

    if (!otp || typeof otp !== 'string' || otp.trim().length === 0) {
        throw new ErrorNotFound("El código OTP es obligatorio.");
    };

    if (!password || typeof password !== 'string' || password.trim().length === 0) {
        throw new ErrorNotFound("La contraseña es obligatoria.");
    };

    if (!id || !isValidObjectId(id)) {
        throw new ErrorNotFound("El ID no es válido.");
    };

    return body;
};

export { accessAcount };
