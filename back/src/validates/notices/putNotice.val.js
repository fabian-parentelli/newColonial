import { ErrorCustom } from "../../utils/custom-exceptions.utils.js";

const ALLOWED_KEYS = ['_id', 'title', 'message', 'start', 'end', 'active', '__v', 'id'];

const putNotice = (body) => {
    const bodyKeys = Object.keys(body);
    const invalidKeys = bodyKeys.filter(k => !ALLOWED_KEYS.includes(k));
    if (invalidKeys.length > 0) throw new ErrorCustom('Campos no permitidos: ' + invalidKeys.join(', '));

    if (!body._id) throw new ErrorCustom('El campo _id es requerido');

    if (body.title !== undefined) body.title = body.title.toString().trim();
    if (body.message !== undefined) body.message = body.message.toString().trim();

    if (body.start !== undefined) {
        const start = new Date(body.start + 'T00:00:00');
        if (isNaN(start.getTime())) throw new ErrorCustom('La fecha de inicio no es válida');
        body.start = start;
    };

    if (body.end !== undefined) {
        const end = new Date(body.end + 'T00:00:00');
        if (isNaN(end.getTime())) throw new ErrorCustom('La fecha de fin no es válida');
        body.end = end;
    };

    if (body.start && body.end && body.start >= body.end)
        throw new ErrorCustom('La fecha de inicio debe ser anterior a la fecha de fin');

    if (body.active !== undefined && typeof body.active !== 'boolean')
        throw new ErrorCustom('El campo active debe ser un booleano');

    return body;
};

export { putNotice };