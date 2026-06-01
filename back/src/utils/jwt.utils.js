import jwt from 'jsonwebtoken';
import env from '../config/dotEnv.config.js';
import { ErrorCustom } from './custom-exceptions.utils.js';

const generateTokens = (user) => {
    const accessToken = jwt.sign({ user, type: 'access' }, env.jwtPrivateKey, { expiresIn: '30m' });
    const refreshToken = jwt.sign({ user, type: 'refresh' }, env.jwtPrivateRefresh, { expiresIn: '1y' });
    return { accessToken, refreshToken };
};

const verifyToken = (refreshToken) => {
    const { user, type } = jwt.verify(refreshToken, env.jwtPrivateRefresh);
    if (type !== 'refresh') throw new ErrorCustom('Token inválido para refresh');
    const accessToken = jwt.sign({ user }, env.jwtPrivateKey, { expiresIn: '30m' });
    return accessToken;
};

const passwordToken = (user) => {
    const token = jwt.sign({ user }, env.jwtPrivateKey, { expiresIn: '1h' });
    return token;
};

export { generateTokens, verifyToken, passwordToken };