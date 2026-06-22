import DcNew from './modals/DcNew.jsx';
import DashCustTable from './DashCustTable.jsx';
import DashCustFilter from './DashCustFilter.jsx';
import { useState, useRef, useEffect } from 'react';
import { Modal, Print, Pager } from 'fara-comp-react';
import { useAlertContext } from '@/context/AlertContext.jsx';
import UserComp from '@/components/users/UserComp/UserComp.jsx';
import { getCustomersApi } from '@/helpers/customer/getCustomers.api.js';

const DashCustomer = ({ user }) => {

    const pref = useRef();
    const { showAlert } = useAlertContext();

    const [query, setQuery] = useState({});
    const [customers, setCustomers] = useState({ docs: [] });
    const [modal, setModal] = useState({ open: false, data: null, type: null });

    useEffect(() => {
        const fetchData = async () => {
            const response = await getCustomersApi(query);
            if (response.status === 'success') setCustomers(response.result);
            else showAlert(response.error, 'error');
        }; fetchData();
    }, [query]);

    return (
        <div className="flex-col">
            <DashCustFilter query={query} setQuery={setQuery} pref={pref} setModal={setModal} />

            <section className='bgdash'>
                <DashCustTable customers={customers?.docs} pref={pref} setModal={setModal} />
            </section>

            <Pager docs={customers} setQuery={setQuery} />

            <Modal open={modal.open} onClose={() => null}>
                {modal.type === 'new-update' && <DcNew data={modal.data} setModal={setModal} setCustomers={setCustomers} />}
                {modal.type === 'user' && <UserComp uid={modal.data} setModal={setModal} />}
            </Modal>
        </div>
    );
};

export default DashCustomer;