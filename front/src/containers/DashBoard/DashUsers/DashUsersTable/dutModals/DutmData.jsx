import { useState } from 'react';
import { SpinnerH } from 'fara-comp-react';
import { userUpdateApi } from '@/helpers/users/userUpdate.api.js';

const DutmData = ({ user, setModal, handleUpdate }) => {

    const [values, setValues] = useState(user);
    const [change, setChange] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') setValues(prev => ({ ...prev, [name]: checked }));
        else if (name === 'address' || name === 'city') {
            setValues(prev => ({ ...prev, location: { ...prev.location, [name]: value } }));
        } else setValues(prev => ({ ...prev, [name]: value }));
        if (!change) setChange(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!change) return setModal({ open: false, data: null, type: null });
        setLoading(true);
        const response = await handleUpdate(values);
        if (response) setModal({ open: false, data: null, type: null });
        setLoading(false);
    };

    return (
        <div className="w-300 flex-col">

            <h3 className='txt-center'>Datos de {values?.name}</h3>

            <form onSubmit={handleSubmit} className='flex-col w-100per'>

                <label className='pgray'>
                    ID
                    <input name="_id" value={values._id} readOnly />
                </label>

                <label className='pgray flex-line'>
                    <input type="checkbox" name="active" checked={values.active} onChange={handleChange}
                        style={{ width: '20px', backgroundColor: '#2C5469' }}
                    />
                    Activo
                </label>

                <label className='pgray'>
                    Nombre
                    <input name="name" value={values.name} onChange={handleChange} />
                </label>

                <label className='pgray'>
                    Email
                    <input name="email" type="email" value={values.email} onChange={handleChange} />
                </label>

                <label className='pgray'>
                    Teléfono
                    <input name="phone" value={values.phone} onChange={handleChange} />
                </label>

                <label className='pgray'>
                    Rol
                    <input name="phone" value={values.role} readOnly />
                </label>

                <label className='pgray'>
                    Dirección
                    <input name="address" value={values.location.address} onChange={handleChange} placeholder="Dirección" />
                </label>

                <label className='pgray'>
                    Ciudad
                    <input name="city" value={values.location.city} onChange={handleChange} placeholder="Ciudad" />
                </label>

                <label className='pgray'>
                    Creado
                    <input name="created" value={values.created} readOnly />
                </label>

                <button type="submit" className="btn btnA btn-center">
                    {loading
                        ? <SpinnerH color='white' />
                        : change ? 'Guardar' : 'Cerrar'
                    }
                </button>
            </form>
        </div>
    );
};

export default DutmData;