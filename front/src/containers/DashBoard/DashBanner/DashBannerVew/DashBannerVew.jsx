import { useEffect, useState } from "react";
import DashBannerVewTab from "./DashBannerVewTab";
import Pager from "../../../../components/tools/Pager/Pager";
import { useAlertContext } from "../../../../context/AlertContext";
import { putPublicityApi } from "../../../../helpers/publicity/putPublicity.api.js";
import { getPublicitiesApi } from "../../../../helpers/publicity/getPublicities.api.js";

const DashBannerVew = () => {

    const { showAlert, setLoading } = useAlertContext();

    const [query, setQuery] = useState({});
    const [publicities, setPublicities] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getPublicitiesApi(query);
            if (response.status === 'success') setPublicities(response.result);
            else showAlert(response.error, 'error');
            setLoading(false);
        }; fetchData();
    }, [query]);

    const handleChange = (id, field, value) => {
        setPublicities(prev => ({
            ...prev, docs: prev.docs.map(pub => pub._id === id ? { ...pub, [field]: value } : pub)
        }));
    };

    const handleBlur = async (publicity) => {
        setLoading(true);
        const response = await putPublicityApi(publicity);
        if (response.status === 'success') {
            const data = { ...publicities };
            const index = data.docs.findIndex(doc => doc._id === publicity._id);
            data.docs[index] = response.result;
            setPublicities(data);
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    return (
        <div className='column'>
            <p>Filter</p>
            {publicities &&
                <DashBannerVewTab
                    publicities={publicities.docs}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                />
            }
            <Pager docs={publicities} setQuery={setQuery} />
        </div>
    );
};

export default DashBannerVew;