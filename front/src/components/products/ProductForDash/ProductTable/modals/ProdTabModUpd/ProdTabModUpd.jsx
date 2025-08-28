import './prodTabModUpd.css';
import { useState } from "react";
import Switch from '../../../../../tools/Switch/Switch';
import SpinnerH from '../../../../../tools/SpinnerH/SpinnerH';
import { useConfigContext } from "../../../../../../context/ConfigContext";

const ProdTabModUpd = ({ product, setModal, handleUpdtae }) => {

    const { config } = useConfigContext();

    const [change, setChange] = useState(false);
    const [values, setValues] = useState(product);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        setChange(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!change) return setModal({ open: false, data: null, type: null });
        setLoading(true);
        const response = await handleUpdtae(values);
        if (response) setModal({ open: false, data: null, type: null });
        setLoading(false);
    };

    return (
        <form className='prodTabModUpd' onSubmit={handleSubmit}>

            <div>
                <h4>Upd {product.name} {product.brand}</h4>
                <p className="pcolorA" style={{ textAlign: 'center' }}>{product.description}</p>
            </div>

            <section className='prodTabModUpdSect'>

                <div className='prodTabModUpdSectDiv'>
                    <label>
                        Nombre
                        <input type="text" name="name" value={values?.name || ''} onChange={handleChange} required />
                    </label>

                    <label>
                        Descripción
                        <input
                            type="text" name='description' value={values?.description || ''} onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Precio
                        <input
                            type="text" name='price' value={values?.price || ''} onChange={handleChange}
                            required placeholder='0'
                        />
                    </label>

                    <label>
                        Unidades por bulto
                        <input
                            type="text" name='box' value={values?.box || ''} onChange={handleChange}
                            required placeholder='0'
                        />
                    </label>

                    <label>
                        Categoría
                        <select name="category" value={values?.category || ''} onChange={handleChange} required>
                            {config && config.categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </label>

                    <label>
                        Familia
                        <select name="family" value={values?.family || ''} onChange={handleChange}>
                            <option value="">Seleccionar familia</option>
                            {config && config.families.map(fam => (
                                <option key={fam} value={fam}>{fam}</option>
                            ))}
                        </select>
                    </label>

                    <label>
                        Costo
                        <input
                            type="text" name='cost' value={values?.cost || ''} onChange={handleChange}
                            required placeholder='0'
                        />
                    </label>

                    <label>
                        Mínimo
                        <input
                            type="text" name='minimum' value={values?.minimum || ''} onChange={handleChange}
                            required placeholder='1'
                        />
                    </label>
                </div>

                <div className='prodTabModUpdSectDiv'>
                    <label>
                        Marca
                        <select name="brand" value={values?.brand || ''} onChange={handleChange} required>
                            {config && config.brands.map(brand => (
                                <option key={brand} value={brand}>{brand}</option>
                            ))}
                        </select>
                    </label>

                    <label>
                        Unidad de medida
                        <select name="unit" value={values?.unit || ''} onChange={handleChange} required>
                            <option value="" hidden>Unidad de medida</option>
                            <option value="un">un</option>
                            <option value="li">lt</option>
                            <option value="gr">gr</option>
                            <option value="kg">kg</option>
                            <option value="ml">ml</option>
                            <option value="cc">cc</option>
                        </select>
                    </label>

                    <label>
                        Cantidad
                        <input
                            type="text" name='quantity' value={values?.quantity || ''} onChange={handleChange}
                            placeholder='Stock, no obligatorio'
                        />
                    </label>

                    <label>
                        Descuento
                        <input
                            type="text" name='discount' value={values?.discount || ''} onChange={handleChange}
                            required placeholder='0'
                        />
                    </label>

                    <label>
                        Sub-categoría
                        <select name="subCategory" value={values?.subCategory || ''} onChange={handleChange} required>
                            {config && config.subCategories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </label>

                    <Switch label='Stock' name='stock' values={values} setValues={setValues} />

                    <label style={{ marginTop: '7px' }}>
                        Ubicación
                        <select name="location" value={values?.location || ''} onChange={handleChange} required>
                            <option value="none">Ninguna</option>
                            <option value="opportunity">Oportunidad</option>
                            <option value="launch">Lanzamiento</option>
                        </select>
                    </label>

                    <button className='btn btnA' disabled={loading}>
                        {loading
                            ? <SpinnerH />
                            : !change ? 'Cerrar' : 'Actualizar'
                        }
                    </button>
                </div>
            </section>
            <p className='pgray'>30-15 // 25-12 // 20-7 // 16-6 // 12-5</p>
        </form>
    );
};

export default ProdTabModUpd;