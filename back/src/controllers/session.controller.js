import { ErrorCustom, ErrorNotFound } from '../utils/custom-exceptions.utils.js';
import * as service from '../services/session.service.js';
import env from '../config/dotEnv.config.js';

const isDev = env.environment === 'development';

const login = async (req, res) => {
    try {
        const { accessToken, refreshToken, result } = await service.login({ ...req.body });
        const oneYear = 365 * 24 * 60 * 60 * 1000;
        const thirtyMinutes = 30 * 60 * 1000;
        res.cookie('accessToken', accessToken, { httpOnly: true, secure: !isDev, sameSite: 'strict', maxAge: thirtyMinutes });
        res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: !isDev, sameSite: 'strict', maxAge: oneYear });
        return res.sendSuccess({ status: 'success', result });
    } catch (error) {
        console.log(error);
        if (error instanceof ErrorCustom || error instanceof ErrorNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const register = async (req, res) => {
    try {
        const { accessToken, refreshToken, result } = await service.register({ ...req.body });
        const oneYear = 365 * 24 * 60 * 60 * 1000;
        const thirtyMinutes = 30 * 60 * 1000;
        res.cookie('accessToken', accessToken, { httpOnly: true, secure: !isDev, sameSite: 'strict', maxAge: thirtyMinutes });
        res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: !isDev, sameSite: 'strict', maxAge: oneYear });
        return res.sendSuccess({ status: 'success', result });
    } catch (error) {
        console.log(error);
        if (error instanceof ErrorCustom || error instanceof ErrorNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const postRefresh = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(401).send({ error: 'No token' });
    try {
        const result = await service.postRefresh(refreshToken);
        const thirtyMinutes = 30 * 60 * 1000;
        res.cookie('accessToken', result, { httpOnly: true, secure: !isDev, sameSite: 'strict', maxAge: thirtyMinutes });
        if (result) return res.sendSuccess({ status: 'success' });
    } catch (error) {
        if (error instanceof ErrorCustom) return res.status(401).send({ error: error.message });
        res.sendServerError(error.message);
    };
};

const logout = async (req, res) => {
    res.clearCookie('accessToken', { httpOnly: true, secure: !isDev, sameSite: isDev ? 'lax' : 'none' });
    res.clearCookie('refreshToken', { httpOnly: true, secure: !isDev, sameSite: isDev ? 'lax' : 'none' });
    res.sendSuccess({ status: 'success' });
};

const getCurrent = async (req, res) => {
    try {
        const result = await service.getCurrent({ ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { login, register, postRefresh, logout, getCurrent };