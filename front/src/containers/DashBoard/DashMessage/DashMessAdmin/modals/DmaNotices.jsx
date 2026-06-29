import { useState } from 'react';
import { Switch, SpinnerH, Icons } from 'fara-comp-react';
import { useAlertContext } from '@/context/AlertContext.jsx';
import { postNoticeApi } from '@/helpers/notice/postNotice.api.js';
import { putNoticeApi } from '@/helpers/notice/putNotice.api.js';

const DmaNotices = ({ data, setNotices, setModal }) => {

    const { showAlert } = useAlertContext();

    const closed = () => setModal({ open: false, data: null, type: null });

    const [change, setChange] = useState(false);
    const [loading, setLoading] = useState(false);
    const toDateInput = (date) => {
        if (!date) return '';
        const d = new Date(date);
        return d.toISOString().slice(0, 10);
    };
    const init = data
        ? { ...data, start: toDateInput(data.start), end: toDateInput(data.end) }
        : { title: '', message: '', start: '', end: '', active: true };
    const [values, setValues] = useState(init);

    const handleChange = (e) => {
        setValues(pre => ({ ...pre, [e.target.name]: e.target.value }));
        if (!change) setChange(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!change) return closed();
        setLoading(true);
        const response = data?._id
            ? await putNoticeApi({ ...values, _id: data._id })
            : await postNoticeApi(values);
        if (response.status === 'success') {
            setNotices(pre => {
                if (data?._id) {
                    const docs = pre.docs.map(doc => doc._id === response.result._id ? response.result : doc);
                    return { ...pre, docs };
                };
                return { ...pre, docs: [...pre.docs, response.result] };
            });
            showAlert(`Comunicado ${data?._id ? 'editado' : 'creado'}`);
            closed();
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    return (
        <form className="flex-col" onSubmit={handleSubmit}>

            <div className='flex-between'>
                <h3 className='colb'>{data?._id ? 'Editar' : 'Crear'} comunicado</h3>
                <Icons type='error' color='var(--colorB)' hover={true} size='25px' onClick={closed} />
            </div>

            <label className="pgray">
                Título
                <input type="text" name="title"
                    value={values.title || ''} onChange={handleChange}
                />
            </label>

            <label className="pgray">
                Mensaje
                <textarea className="h-100" name="message"
                    value={values.message || ''} onChange={handleChange}
                />
            </label>

            <section className="flex-line">

                <label className="pgray">
                    Inicio
                    <input type="date" name="start"
                        value={values.start || ''} onChange={handleChange}
                    />
                </label>

                <label className="pgray">
                    Fin
                    <input type="date" name="end"
                        value={values.end || ''} onChange={handleChange}
                    />
                </label>

            </section>

            <div className='flex-center'>
                <Switch values={values} setValues={setValues} name='active' setChange={setChange} />
            </div>

            <button className='btn btnA btn-center' disabled={loading}>
                {loading
                    ? <SpinnerH color='white' />
                    : change ? 'Guardar' : 'Cerrar'
                }
            </button>

        </form>
    );
};

export default DmaNotices;