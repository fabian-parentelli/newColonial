import { Tooltip, Icons, Print } from 'fara-comp-react';

const DashMessFilter = ({ view, handleView, setModal, pref }) => {

    return (
        <div className="bgdash flex-between">

            <section className="flex-line">
                <p className="cur-pointer" style={{ color: view === 'mes' ? 'var(--colorB)' : 'gray', fontWeight: '600' }} onClick={handleView}>Mensajes</p>
                <p className="cur-pointer" style={{ color: view === 'not' ? 'var(--colorB)' : 'gray', fontWeight: '600' }} onClick={handleView}>Comunicados</p>
            </section>

            <section className='flex-line'>
                <Tooltip text={`Nuevo ${view === 'not' ? 'comunicado' : 'Mensaje'}`}
                    backgroundColor='var(--colorB)' cursor='pointer'
                >
                    <Icons type='event' color={'var(--colorB)'} size='23px'
                        onClick={() => setModal({ open: true, data: null, type: view })}
                    />
                </Tooltip>

                <Print size='23px' color='var(--colorB)' />
            </section>
        </div>
    );
};

export default DashMessFilter;