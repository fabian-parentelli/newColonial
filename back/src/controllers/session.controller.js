import { ErrorCustom, ErrorNotFound } from '../utils/custom-exceptions.utils.js';
import * as service from '../services/session.service.js';
import env from '../config/dotEnv.config.js';

const isDev = env.environment === 'development';

const postSession = async (req, res) => {
    try {
        const result = await service.postSession({ ...req.body });
        const { accessToken, refreshToken, user } = result;
        if (accessToken && refreshToken) {
            res.cookie('colonial_accessToken', accessToken, { httpOnly: true, secure: !isDev, sameSite: isDev ? 'lax' : 'none', maxAge: 15 * 60 * 1000 });
            res.cookie('colonial_refreshToken', refreshToken, { httpOnly: true, secure: !isDev, sameSite: isDev ? 'lax' : 'none', maxAge: 30 * 24 * 60 * 60 * 1000 });
        };
        if (result) return res.sendSuccess({ status: 'success', result: user });
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const postRefresh = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(401).send({ error: 'No token' });
    try {
        const result = await service.postRefresh(refreshToken);
        const thirtyMinutes = 30 * 60 * 1000;
        res.cookie('colonial_accessToken', result, { httpOnly: true, secure: !isDev, sameSite: 'strict', maxAge: thirtyMinutes });
        if (result) return res.sendSuccess({ status: 'success' });
    } catch (error) {
        if (error instanceof ErrorCustom) return res.status(401).send({ error: error.message });
        res.sendServerError(error.message);
    };
};

const logout = async (req, res) => {
    res.clearCookie('colonial_accessToken', { httpOnly: true, secure: !isDev, sameSite: isDev ? 'lax' : 'none' });
    res.clearCookie('colonial_refreshToken', { httpOnly: true, secure: !isDev, sameSite: isDev ? 'lax' : 'none' });
    res.sendSuccess({ status: 'success' });
};

const whatEmail = async (req, res) => {
    try {
        const result = await service.whatEmail({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const accessAcount = async (req, res) => {
    try {
        const result = await service.accessAcount({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
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

export { postSession, postRefresh, logout, whatEmail, accessAcount, getCurrent };