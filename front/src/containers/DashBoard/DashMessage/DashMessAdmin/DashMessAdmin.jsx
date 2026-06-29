import { Modal } from 'fara-comp-react';
import DmaNotices from './modals/DmaNotices.jsx';
import DashMessFilter from "./DashMessFilter.jsx";
import { useState, useRef, useEffect } from "react";
import DmaNoticesTable from "./comps/DmaNoticesTable.jsx";
import { useAlertContext } from '@/context/AlertContext.jsx';
import { getNoticesApi } from '@/helpers/notice/getNotices.api.js';

const DashMessAdmin = ({ user }) => {

    const pref = useRef();
    const { showAlert } = useAlertContext();
    const [view, setView] = useState('not');
    const [notices, setNotices] = useState({ docs: [] });
    const [modal, setModal] = useState({ open: false, data: null, type: null });

    useEffect(() => {
        const fetchData = async () => {
            const response = await getNoticesApi({});
            if (response.status === 'success') setNotices(response.result);
            else showAlert(response.error, 'error');
        }; fetchData();
    }, []);

    const handleView = () => setView(view === 'not' ? 'mes' : 'not');

    return (
        <div className="flex-col">
            <DashMessFilter view={view} handleView={handleView} setModal={setModal} pref={pref} />

            {view === 'not'
                ? <DmaNoticesTable notices={notices?.docs} setModal={setModal} />
                : 'Mensajes'
            }

            <Modal open={modal.open} onClose={() => null}>
                {modal.type === 'not' &&
                    <DmaNotices data={modal.data} setNotices={setNotices} setModal={setModal} />
                }
            </Modal>
        </div>
    );
};

export default DashMessAdmin;