import { Icons, Tooltip } from 'fara-comp-react';

const DmaNoticesTable = ({ notices, setModal }) => {

    const formatDate = (date) => {
        if (!date) return '';
        return new Date(date).toLocaleDateString('es-AR');
    };

    return (
        <div className="table-container bgdash">
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Mensaje</th>
                        <th>Inicio</th>
                        <th>Fin</th>
                        <th>Activo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="pblue">
                    {notices?.map(doc => (
                        <tr key={doc?._id}>
                            <td>{doc?.title}</td>
                            <td>{doc?.message}</td>
                            <td>{formatDate(doc?.start)}</td>
                            <td>{formatDate(doc?.end)}</td>
                            <td>{doc?.active ? 'Sí' : 'No'}</td>
                            <td>
                                <Tooltip text='Editar' backgroundColor='var(--colorB)' cursor='pointer'>
                                    <Icons type='pencil' size='18px'
                                        onClick={() => setModal({ open: true, data: doc, type: 'not' })}
                                    />
                                </Tooltip>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DmaNoticesTable;