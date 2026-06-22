import * as configService from '../services/config.service.js';
import { ErrorCustom } from '../utils/custom-exceptions.utils.js';

const getConfigPage = async (req, res) => {
    try {
        const result = await configService.getConfigPage();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const postConfig = async (req, res) => {
    try {
        const result = await configService.postConfig({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { getConfigPage, postConfig };