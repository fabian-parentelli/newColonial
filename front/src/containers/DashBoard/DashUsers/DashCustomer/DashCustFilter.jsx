import { Icons, Tooltip, Print } from 'fara-comp-react';

const DashCustFilter = ({ query, setQuery, pref, setModal }) => {

    return (
        <div className="bgdash flex-between">

            <h3 className='colb'>Clientes</h3>

            <section className='flex-line'>
                <Tooltip text='Nuevo cliente' backgroundColor='#234352' cursor='pointer'>
                    <Icons type='user' size='20px'
                        onClick={() => setModal({ open: true, data: null, type: 'new-update' })}
                    />
                </Tooltip>

                <Print color='#234352' size='20px' />
            </section>
        </div>
    );
};

export default DashCustFilter;