import { userModel } from '../models/users.model.js';

export default class User {

    postUser = async (user) => {
        return await userModel.create(user);
    };

    getById = async (id) => {
        return await userModel.findById(id).lean();
    };

    getUser = async (query = {}, get = {}) => {
        return await userModel.findOne(query, get).lean();
    };

    getByEmail = async (email) => {
        return await userModel.findOne({ email }).lean();
    };

    update = async (user) => {
        return await userModel.findByIdAndUpdate(user._id, user, { returnDocument: 'after' }).lean();
    };

    getUsers = async (query, page) => {
        const baseFilter = [{ role: { $ne: 'master' } }];
        if (query.role) {
            baseFilter.push({ role: query.role });
            delete query.role;
        };
        return await userModel.paginate({ $and: [...baseFilter, query] },
            { page, limit: 12, lean: true, sort: { created: -1 }, select: '-password' }
        );
    };

    getAutoComplete = async (query) => {
        return await userModel.find(query, { name: 1, _id: 1 });
    };

    deleteById = async (_id) => {
        return await userModel.deleteOne({ _id });
    };

};