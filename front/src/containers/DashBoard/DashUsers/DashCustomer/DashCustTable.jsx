import { Icons, Tooltip } from 'fara-comp-react';

const DashCustTable = ({ customers, pref, setModal }) => {

    // Configurar dia de venta
    // Configurar dia de entrega

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Área</th>
                        <th>Dirección</th>
                        <th>Observación</th>
                        <th></th>
                        <th>Activo</th>
                    </tr>
                </thead>
                <tbody className="pblue">
                    {customers?.map(doc => (
                        <tr key={doc?._id}>
                            <td>{doc?.name}</td>
                            <td>{doc?.email}</td>
                            <td>{doc?.phone}</td>
                            <td>{doc?.area}</td>
                            <td>{doc?.address}</td>
                            <td>{doc?.observation}</td>
                            <td>
                                <Tooltip text='Usuario' backgroundColor='#234352' cursor='pointer'>
                                    <Icons type={doc?.uid ? 'user' : 'notuser'} size='20px'
                                        onClick={doc?.uid
                                            ? () => setModal({ open: true, data: doc.uid, type: 'user' })
                                            : () => null
                                        }
                                    />
                                </Tooltip>
                            </td>
                            <td>{doc?.active ? 'Sí' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DashCustTable;