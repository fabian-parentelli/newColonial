import { ErrorCustom } from "../../utils/custom-exceptions.utils.js";

const ALLOWED_KEYS = ['title', 'message', 'start', 'end', 'active'];

const postNotice = (body) => {
    const bodyKeys = Object.keys(body);
    const invalidKeys = bodyKeys.filter(k => !ALLOWED_KEYS.includes(k));
    if (invalidKeys.length > 0) throw new ErrorCustom('Campos no permitidos: ' + invalidKeys.join(', '));

    const required = ['title', 'message', 'start', 'end'];
    for (const key of required) {
        if (!body[key]) throw new ErrorCustom(`El campo ${key} es requerido`);
    };

    const title = body.title.toString().trim();
    const message = body.message.toString().trim();

    const start = new Date(body.start + 'T00:00:00');
    if (isNaN(start.getTime())) throw new ErrorCustom('La fecha de inicio no es válida');

    const end = new Date(body.end + 'T00:00:00');
    if (isNaN(end.getTime())) throw new ErrorCustom('La fecha de fin no es válida');

    if (start >= end) throw new ErrorCustom('La fecha de inicio debe ser anterior a la fecha de fin');

    const notice = { title, message, start, end };

    if (body.active !== undefined) {
        if (typeof body.active !== 'boolean') throw new ErrorCustom('El campo active debe ser un booleano');
        notice.active = body.active;
    };

    return notice;
};

export { postNotice };
