import Router from './routes.js';
import * as userController from '../controllers/users.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.config.js';
import { uploadToCloudinary } from '../config/cloudinary.config.js';

export default class UserRouter extends Router {
    init() {
        this.get('/ac', ['ADMIN', 'MASTER'], passportEnum.JWT, userController.getAutoComplete);
        this.get('/', ['MASTER', 'ADMIN'], passportEnum.JWT, userController.getUsers);
        this.put('/image', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, userController.updateImg);
        this.put('/avatar', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, userController.putAvatar);
        this.put('/delete', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, userController.deleteAvatar);
        this.put('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, userController.update);
        this.delete('/:id', ['MASTER'], passportEnum.JWT, userController.deleteUser);
    };
};