import './bodyNotice.css';
import { useEffect, useState } from 'react';
import { getActiveNoticesApi } from '@/helpers/notice/getActiveNotices.api.js';

const DB_NAME = 'colonialDB';
const STORE_NAME = 'notice';
const NOTICE_KEY = 'current';

const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            };
        };
        request.onsuccess = (e) => resolve(e.target.result);
        request.onerror = (e) => reject(e.target.error);
    });
};

const getStoredNotice = async () => {
    const db = await openDB();
    return new Promise((resolve) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.get(NOTICE_KEY);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => resolve(null);
    });
};

const saveNotice = async (notice) => {
    const db = await openDB();
    return new Promise((resolve) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        store.put(notice, NOTICE_KEY);
        tx.oncomplete = () => resolve();
    });
};

const deleteNotice = async () => {
    const db = await openDB();
    return new Promise((resolve) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        store.delete(NOTICE_KEY);
        tx.oncomplete = () => resolve();
    });
};

const BodyNotice = () => {

    const [notice, setNotice] = useState(null);

    useEffect(() => {
        const timer = setTimeout(async () => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const stored = await getStoredNotice();

            if (stored) {
                const end = new Date(stored.end);
                if (end < today) {
                    await deleteNotice();
                    const response = await getActiveNoticesApi();
                    if (response.status === 'success' && response.result.length > 0) {
                        const fresh = response.result[0];
                        await saveNotice({ _id: fresh._id, title: fresh.title, message: fresh.message, end: fresh.end, dismissed: false });
                        setNotice(fresh);
                    };
                } else if (!stored.dismissed) {
                    setNotice(stored);
                };
            } else {
                const response = await getActiveNoticesApi();
                if (response.status === 'success' && response.result.length > 0) {
                    const fresh = response.result[0];
                    await saveNotice({ _id: fresh._id, title: fresh.title, message: fresh.message, end: fresh.end, dismissed: false });
                    setNotice(fresh);
                };
            };
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = async () => {
        const stored = await getStoredNotice();
        if (stored) {
            await saveNotice({ ...stored, dismissed: true });
        };
        setNotice(null);
    };

    if (!notice) return null;

    return (
        <div className="bodyNotice">
            <div className="bodyNotice-banner">
                <div className="bodyNotice-content">
                    <div className="bodyNotice-icon">!</div>
                    <div className="bodyNotice-text">
                        <p className="bodyNotice-title">{notice.title}</p>
                        <p className="bodyNotice-message">{notice.message}</p>
                    </div>
                </div>
                <button className="bodyNotice-close" onClick={handleClose}>&times;</button>
            </div>
        </div>
    );
};

export default BodyNotice;