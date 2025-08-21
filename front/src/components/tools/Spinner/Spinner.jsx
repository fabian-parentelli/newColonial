import './spinner.css';

const Spinner = ({ color, size }) => {

    return (
        <div
            className='spinner'
            role='status'
            aria-live='polite'
            aria-label='Cargando'
            style={{
                borderTopColor: color ? color : '#2C5469',
                width: size ? size : '36px',
                height: size ? size : '36px',
                zIndex: '1003'
            }}
        >
        </div>
    );
};

export default Spinner;