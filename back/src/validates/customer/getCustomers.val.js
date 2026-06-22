import { isValidObjectId, normalize } from "../validations.val.js";
import { ErrorCustom } from "../../utils/custom-exceptions.utils.js";

const getCustomers = (query) => {
    
    const { page, name, uid, area, active } = query;

    if (page !== undefined && (isNaN(Number(page)) || Number(page) < 1)) {
        throw new ErrorCustom("El parámetro page debe ser un número mayor o igual a 1.");
    };

    if (uid && !isValidObjectId(uid)) {
        throw new ErrorCustom("El uid no es un ObjectId válido.");
    };

    const filter = {};

    if (name && typeof name === 'string') {
        filter.name = { $regex: normalize(name), $options: 'i' };
    };

    if (uid) filter.uid = uid;

    if (area && typeof area === 'string') {
        filter.area = { $regex: normalize(area), $options: 'i' };
    };

    if (active !== undefined) {
        filter.active = active === 'true' || active === true;
    };

    return { filter, page };
};

export { getCustomers };
