import './dpData.css';
import { useState } from 'react';
import { useLoginContext } from '../../../../context/LoginContext';
import UserForm from '../../../../components/users/UserForm/UserForm';

const DpData = ({ user }) => {

    const { updateUser } = useLoginContext();
    const [values, setValues] = useState(user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateUser(values);
    };

    return (
        <form className='dpData' onSubmit={handleSubmit}>
            <UserForm values={values} setValues={setValues} vew={{ door: true, password: false }} />

            <label>
                Cumpleaños
                <input type="date" name='birthday' value={values.birthday || ''}
                    onChange={(e) => setValues({ ...values, birthday: e.target.value })}
                />
            </label>

            <button className='btn btnA'>Actualizar</button>
        </form>
    );
};

export default DpData;