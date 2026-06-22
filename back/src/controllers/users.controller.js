import * as userService from '../services/users.service.js';
import { ErrorCustom } from '../utils/custom-exceptions.utils.js';

const postUser = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await userService.postUser({ ...req.body }, imagesUrl, req.user);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAutoComplete = async (req, res) => {
    try {
        const result = await userService.getAutoComplete({ ...req.query });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getUsers = async (req, res) => {
    try {
        const result = await userService.getUsers({ ...req.query });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updateImg = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await userService.updateImg({ ...req.body }, imagesUrl, req.user);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const putAvatar = async (req, res) => {
    try {
        const result = await userService.putAvatar({ ...req.body }, req.user);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const update = async (req, res) => {
    try {
        const result = await userService.update({ ...req.body }, req.user);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const deleteAvatar = async (req, res) => {
    try {
        const result = await userService.deleteAvatar({ ...req.body }, req.user);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const deleteUser = async (req, res) => {
    try {
        const result = await userService.deleteUser({ ...req.params });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ErrorCustom) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export {
    getUsers, postUser, update, putAvatar, updateImg, deleteAvatar, getAutoComplete, deleteUser
};