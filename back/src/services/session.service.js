import { userRepository } from '../repositories/index.repositories.js';
import { generateTokens, verifyToken } from '../utils/jwt.utils.js';
import { ErrorCustom } from '../utils/custom-exceptions.utils.js';
import { validation } from '../validates/session/session.val.js';
import { createHash, isValidPassword } from '../utils/hashedPassword.utils.js';

const login = async (body) => {
    validation.login(body);
    const result = await userRepository.getByEmail(body.email);
    if (!result) throw new ErrorCustom('Email no válido');
    const comparePassword = isValidPassword(result, body.password);
    if (!comparePassword) throw new ErrorCustom('La contraseña es incorrecta');
    delete result.password;
    const tokenPayload = { _id: result._id, active: result.active, role: result.role };
    const { accessToken, refreshToken } = generateTokens(tokenPayload);
    return { accessToken, refreshToken, result };
};

const register = async (body) => {
    validation.register(body);
    const isUser = await userRepository.exists(body.email);
    if (isUser) throw new ErrorCustom('Ya existe un usuario con este email');
    const user = { ...body };
    user.password = createHash(user.password);
    const result = await userRepository.register(user);
    if (!result) throw new ErrorCustom('No se puede registrar al usuario');
    delete result.password;
    const tokenPayload = { _id: result._id, active: result.active, role: result.role };
    const { accessToken, refreshToken } = generateTokens(tokenPayload);
    return { accessToken, refreshToken, result };
};

const postRefresh = async (refreshToken) => {
    if (!refreshToken) throw new ErrorCustom('Token vencido, vuelve a inciar sesión', 'info');
    const accessToken = verifyToken(refreshToken);
    if (!accessToken) throw new ErrorCustom('No se puede generar el accessToken', 'warn');
    return accessToken;
};

const getCurrent = async (user) => {
    const result = await userRepository.getById(user._id);
    if (!result) throw new ErrorCustom('Error al traer los datos del usuarios', 'info');
    return { status: 'success', result };
};

export { login, register, postRefresh, getCurrent };