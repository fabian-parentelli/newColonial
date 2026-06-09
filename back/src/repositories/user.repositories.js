import { userManager } from '../dao/manager/index.manager.js';

export default class UserRepository {

    postUser = async (user) => {
        const result = await userManager.postUser(user);
        return result.toObject();
    };

    getById = async (id) => {
        const result = await userManager.getById(id);
        return result;
    };

    getUser = async (query, get) => {
        const result = await userManager.getUser(query, get);
        return result;
    };

    update = async (user) => {
        const result = await userManager.update(user);
        return result;
    };

    getUsers = async (query, page) => {
        const result = await userManager.getUsers(query, page);
        return result;
    };

    getAutoComplete = async (query) => {
        const result = await userManager.getAutoComplete(query);
        return result;
    };;

    deleteById = async (id) => {
        const result = await userManager.deleteById(id);
        return result;
    };

};