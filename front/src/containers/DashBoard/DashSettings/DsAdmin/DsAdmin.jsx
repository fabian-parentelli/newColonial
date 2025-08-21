import { useState } from 'react';
import DsAdminFilters from './DsAdminFilters/DsAdminFilters';

const DsAdmin = () => {

    const [vew, setVew] = useState(null);

    return (
        <div className='column'>
            <section className='btns'>
                <button className='btn btnA' onClick={()=> setVew('fil')} style={{color: vew === 'fil' ? '#F4B942' : ''}}>Filtros</button>
                <button className='btn btnA' onClick={()=> setVew('oth')} style={{color: vew === 'oth' ? '#F4B942' : ''}}>Otro</button>
            </section>

            {vew === 'fil' && <DsAdminFilters />}
        </div>
    );
};

export default DsAdmin;