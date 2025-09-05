import './bodyButtons.css';
import { useNavigate } from 'react-router-dom';

const BodyButtons = () => {

    const navigate = useNavigate();

    return (
        <div className="bodyButtons">
            <button className='btn btnE' onClick={() => navigate('/all')}>Ver Productos</button>
            <button className='btn btnA' onClick={() => navigate('/list')}>Lista de precios</button>
        </div>
    );
};

export default BodyButtons;