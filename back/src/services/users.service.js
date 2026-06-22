import { userRepository, activityRepository } from "../repositories/index.repositories.js";
import { ErrorCustom } from '../utils/custom-exceptions.utils.js';
import { createHash, isValidPassword } from '../utils/hashedPassword.utils.js';
// import { passwordToken } from '../utils/jwt.utils.js';
import { recoverPassword_HTML } from '../utils/html/recoverPassword.utils.js';
import { sendEmail } from './email.service.js';
import env from '../config/dotEnv.config.js';
import { v4 as uuidv4 } from 'uuid';
import { userOrAdmin } from '../utils/utilsServices/users.utils.js';
import { getPublicId, deleteImg } from "../config/cloudinary.config.js";
import { postUserHtml } from "../utils/html/postUser.html.js";

const postUser = async ({ body }, imagesUrl, user) => {
    body = JSON.parse(body);
    const password = body.password;
    const isUser = await userRepository.exists(body.email);
    if (isUser) throw new ErrorCustom('Ya existe un usuario con este email');
    if (imagesUrl && imagesUrl.length > 0) body.avatar = [imagesUrl[0]];
    if (user.role === 'seller') body.seller = [user._id];
    body.password = createHash(body.password);
    const result = await userRepository.register(body);
    if (!result) throw new ErrorCustom('No se puede registrar al usuario');
    await activityRepository.create({ eventId: result._id, userId: user.role === 'seller' ? user._id : 'admin', type: 'postUser' });
    result.password = password;
    const emailTo = {
        to: body.email,
        subject: 'Creamos tu perfil',
        html: await postUserHtml(result)
    };
    await sendEmail(emailTo);
    return { status: 'success' };
};

const getAutoComplete = async ({ active, seller }) => {
    const query = { role: { $ne: 'master' } };
    if (active !== undefined) query.active = active;
    if (seller) query.role = { $in: ['seller', 'admin'], $ne: 'master' };
    const result = await userRepository.getAutoComplete(query);
    if (!result) throw new ErrorCustom('Error al tarer los datos del autompleteado');
    return { status: 'success', result };
};

const getUsers = async ({ page = 1, active, id, role, city }) => {
    const query = {};
    if (id) query._id = id;
    if (active !== undefined) query.active = active;
    if (role) query.role = role;
    if (city) query['location.city'] = city;
    const result = await userRepository.getUsers(query, page);
    if (!result) throw new ErrorCustom('Error al tarer los usuarios');
    return { status: 'success', result };
};

const updateImg = async (body, imagesUrl, user) => {
    const userDb = await userRepository.getById(body._id);
    if (!user) throw new ErrorCustom('Error al traer al usaurio');
    userDb.avatar.unshift(imagesUrl[0]);
    const result = await userRepository.update(userDb);
    if (!result) throw new ErrorCustom('Error al actualizar el usuario');
    return await userOrAdmin(result, 'uploadImg', 'uploadImgforUser', user, userDb);
};

const putAvatar = async (body, user) => {
    const userDb = await userRepository.getById(body.id);
    if (!user) throw new ErrorCustom('Error al traer al usaurio');
    const index = userDb.avatar.findIndex(ava => ava === body.url);
    if (index !== -1) userDb.avatar.splice(index, 1);
    userDb.avatar.unshift(body.url);
    const result = await userRepository.update(userDb);
    if (!result) throw new ErrorCustom('Error al actualizar el usuario');
    return await userOrAdmin(result, 'putAvatar', 'putAvatarFromAdmin', user, userDb);
};

const update = async (body, user) => {
    const userDb = await userRepository.getById(body._id);
    if (!userDb) throw new ErrorCustom('Error al traer el usuario de la base de datos');
    const newUser = { ...userDb, ...body };
    const result = await userRepository.update(newUser);
    if (!result) throw new ErrorCustom('Error al actualizar el usaurio');
    return await userOrAdmin(result, 'uploadImg', 'uploadImgforUser', user, userDb);
};

const deleteAvatar = async (body, user) => {
    const userDb = await userRepository.getById(body.id);
    if (!userDb) throw new ErrorCustom('Error al traer el usuario de la base de datos');
    const index = userDb.avatar.findIndex(ava => ava === body.url);
    if (index !== -1) userDb.avatar.splice(index, 1);
    const imgId = getPublicId(body.url);
    await deleteImg(imgId);
    const result = await userRepository.update(userDb);
    if (!result) throw new ErrorCustom('Error al actualizar el usuario');
    return await userOrAdmin(result, 'deleteAvatar', 'deleteAvatarFromAdmin', user, userDb);
};

const deleteUser = async ({ id }) => {
    const result = await userRepository.deleteById(id);
    if (!result) throw new ErrorCustom(`Error al eliminar el usaurio ${id}`);
    return { status: 'success' };
};

export {
    getUsers, postUser, updateImg, putAvatar, update, deleteAvatar, getAutoComplete, deleteUser
};