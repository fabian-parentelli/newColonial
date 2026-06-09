import jwt from 'jsonwebtoken';
import env from '../config/dotEnv.config.js';
import { ErrorCustom } from './custom-exceptions.utils.js';

const generateTokens = (user) => {
    const accessToken = jwt.sign({ user, type: 'colonial_access' }, env.jwtPrivateKey, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ user, type: 'colonial_refresh' }, env.jwtPrivateRefresh, { expiresIn: '30d' });
    return { accessToken, refreshToken };
};

const verifyToken = (refreshToken) => {
    const { user, type } = jwt.verify(refreshToken, env.jwtPrivateRefresh);
    if (type !== 'colonial_refresh') throw new ErrorCustom('Token inválido para refresh');
    const accessToken = jwt.sign({ user }, env.jwtPrivateKey, { expiresIn: '15m' });
    return accessToken;
};

export { generateTokens, verifyToken };