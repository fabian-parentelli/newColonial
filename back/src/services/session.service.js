import { createHash, isValidPassword } from '../utils/hashedPassword.utils.js';
import { userRepository } from '../repositories/index.repositories.js';
import { generateTokens, verifyToken } from '../utils/jwt.utils.js';
import { ErrorCustom } from '../utils/custom-exceptions.utils.js';
import { validation } from '../validates/session/session.val.js';
import { whatEmailHtml } from '../utils/html/whatEmail.tem.js';
import { sendEmail } from './email.service.js';
import { randomUUID } from 'crypto';

const postSession = async (body) => {
    validation[body.type](body);
    let result = null;

    if (body.type === 'register') {
        const user = await userRepository.getUser({ email: body.email }, { _id: 1 });
        if (user) throw new ErrorCustom('Ya existe un usuario con este email');
        body.password = createHash(body.password);
        result = await userRepository.postUser(body);
    };

    if (body.type === 'login') {
        result = await userRepository.getUser({ email: body.email });
        if (!result) throw new ErrorCustom('Email no válido');
        const comparePassword = isValidPassword(result, body.password);
        if (!comparePassword) throw new ErrorCustom('La contraseña es incorrecta');
    };

    if (!result) {
        throw new ErrorCustom(`Error al ${body.type === 'register' ? 'registrar' : 'iniciar sesión'} el usuario`);
    };

    delete result.password;
    const { _id, active, role } = result;
    const { accessToken, refreshToken } = generateTokens({ _id, active, role });
    return { accessToken, refreshToken, user: result };
};

const postRefresh = async (refreshToken) => {
    if (!refreshToken) throw new ErrorCustom('Token vencido, vuelve a inciar sesión', 'info');
    const accessToken = verifyToken(refreshToken);
    if (!accessToken) throw new ErrorCustom('No se puede generar el accessToken', 'warn');
    return accessToken;
};

const whatEmail = async (body) => {
    const email = validation.whatEmail(body);
    const user = await userRepository.getUser({ email });
    if (!user) throw new ErrorCustom('No existe un usuario con ese email', 'info');
    setImmediate(async () => {
        const code = randomUUID().slice(0, 10);
        user.password = createHash(code);
        await userRepository.update(user);
        delete user.password;
        const emailTo = {
            to: user.email,
            subject: 'Código OTP para recuperar la contraseña',
            html: await whatEmailHtml({ ...user, code })
        };
        await sendEmail(emailTo);
    });
    return { status: 'success' };
};

const accessAcount = async (body) => {
    validation.accessAcount(body);
    const user = await userRepository.getById(body.id);
    if (!user) throw new ErrorCustom('Error al traer los datos del usuarios', 'info');
    const isValid = await isValidPassword(user, body.otp);
    if (!isValid) throw new ErrorCustom('Código inválido', 'info');
    setImmediate(async () => {
        user.password = await createHash(body.password);
        await userRepository.update(user);
    })
    return { status: 'success' };
};

const getCurrent = async (user) => {
    const result = await userRepository.getById(user._id);
    if (!result) throw new ErrorCustom('Error al traer los datos del usuarios', 'info');
    return { status: 'success', result };
};

export { postSession, postRefresh, whatEmail, accessAcount, getCurrent };