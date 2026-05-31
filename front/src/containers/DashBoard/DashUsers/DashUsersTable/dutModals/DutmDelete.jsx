import { SpinnerH, Switch, Icons } from 'fara-comp-react';
import { useState } from 'react';

const DutmDelete = ({ user, setModal, handleDelete }) => {

    const closed = () => setModal({ open: false, data: null, type: null });

    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({ sure: false });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!values.sure) return closed();
        setLoading(true);
        const response = await handleDelete(user.id);
        if(response) closed();
        setLoading(false);
    };

    return (
        <form className="flex-col-center w-300" onSubmit={handleSubmit}>

            <section className='flex jc-between w-100per'>
                <div></div>
                <h3 className='cola'>Eliminar a {user.name}</h3>
                <Icons type='error' color='#234352' size='25px' hover={true} onClick={closed} />
            </section>

            <p className='pblue'>Realmente quieres eliminar a este usuario</p>

            <Switch value={values} setValues={setValues} name='sure' />
            <br />
            <button className='btn btnA'>
                {loading
                    ? <SpinnerH color='white' />
                    : values.sure ? 'Eliminar' : 'Cerrar'
                }
            </button>
        </form>
    );
};

export default DutmDelete;