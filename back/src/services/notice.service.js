import { noticeRepository } from '../repositories/index.repositories.js';
import { ErrorCustom } from '../utils/custom-exceptions.utils.js';
import { validation } from '../validates/notices/notice.val.js';
import cron from 'node-cron';

const postNotice = async (body) => {
    const notice = validation.postNotice(body);
    const result = await noticeRepository.postNotice(notice);
    if (!result) throw new ErrorCustom('Error al guardar el aviso');
    return { status: 'success', result };
};

const getNotices = async ({ page = 1, id, active }) => {
    const query = {};
    if (id) query._id = id;
    if (active !== undefined) query.active = active;
    const result = await noticeRepository.getNotices(query, page);
    if (!result) throw new ErrorCustom('Error al obtener los avisos');
    return { status: 'success', result };
};

const putNotice = async (body) => {
    const notice = validation.putNotice(body);
    const exists = await noticeRepository.getById(notice._id);
    if (!exists) throw new ErrorCustom('El aviso no existe');
    if (!notice.start && !notice.end) {
        const merged = { ...exists, ...notice };
        if (merged.start && merged.end && new Date(merged.start) >= new Date(merged.end))
            throw new ErrorCustom('La fecha de inicio debe ser anterior a la fecha de fin');
    };
    const result = await noticeRepository.update({ ...exists, ...notice });
    if (!result) throw new ErrorCustom('Error al actualizar el aviso');
    return { status: 'success', result };
};

cron.schedule('0 3 * * *', async () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const notices = await noticeRepository.getAll();
    for (const notice of notices) {
        const start = new Date(notice.start);
        const end = new Date(notice.end);
        const shouldBeActive = today >= start && today <= end;
        if (notice.active !== shouldBeActive) {
            await noticeRepository.update({ _id: notice._id, active: shouldBeActive });
        };
    };
}, { timezone: 'America/Argentina/Buenos_Aires' });

const getActiveNotices = async () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const result = await noticeRepository.getActiveByDate(today);
    if (!result) throw new ErrorCustom('Error al obtener los avisos activos');
    return { status: 'success', result };
};

export { postNotice, getNotices, putNotice, getActiveNotices };