import * as messageService from '../services/message.service.js';
import { ErrorCustom } from '../utils/custom-exceptions.utils.js';

const postMessage = async (req, res) => {
    try {
        const result = await messageService.postMessage({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { postMessage };