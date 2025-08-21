import './loader.css';
import Spinner from '../../tools/Spinner/Spinner.jsx';

const Loader = ({ loading, color = 'gray', text = false }) => {

    if (loading) return (
        <div className='loader'>
            <Spinner size={'50px'} color={color} />
            {text && <p>Esto puede tardar unos minutos, no cierres esta vetana.</p>}
        </div>
    );
};

export default Loader;