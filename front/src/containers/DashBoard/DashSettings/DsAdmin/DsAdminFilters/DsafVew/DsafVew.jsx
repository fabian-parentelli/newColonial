import './dsafVew.css';
import { useState } from "react";
import { useConfigContext } from "../../../../../../context/ConfigContext";

const DsafVew = () => {

    const { config, update } = useConfigContext();
    const [localConfig, setLocalConfig] = useState(config);

    const handleChange = (section, index, value) => {
        setLocalConfig(prev => ({
            ...prev,
            [section]: prev[section].map((item, i) =>
                i === index ? value : item
            )
        }));
    };

    const handleBlur = async (section, index, value) => {
        const data = { ...config };
        data[section][index] = value;
        await update(data, true);
    };

    const name = {
        "brands": 'Marcas',
        "categories": 'Categorías',
        "subCategories": 'Sub-categorías',
        "families": 'Familias',
    };

    const renderInputs = (sectionName) => (
        <section className='dsAdminFiltersSect'>
            <h4>{name[sectionName]}</h4>
            <div className='dsAdminFiltersCol'>
                {localConfig[sectionName].map((item, index) => (
                    <div key={index} className='dsAdminFiltersDiv'>
                        <input
                            value={item}
                            onChange={e => handleChange(sectionName, index, e.target.value)}
                            onBlur={e => handleBlur(sectionName, index, e.target.value)}
                        />
                    </div>
                ))}
            </div>
        </section>
    );

    return (
        <div className='dsafVew'>
            {renderInputs("brands")}
            {renderInputs("categories")}
            {renderInputs("subCategories")}
            {renderInputs("families")}
        </div>
    );
};

export default DsafVew;