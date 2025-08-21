import './productsNewHtml.css';
import Icons from '../../../Icons/Icons';
import Switch from '../../../tools/Switch/Switch';
import Tooltip from '../../../tools/Tooltip/Tooltip';
import CloudFile from '../../../utils/CloudFile/CloudFile';
import { useConfigContext } from '../../../../context/ConfigContext';

const ProductsNewHtml = ({ values, setValues, handleChange, handleSubmit, setModal, handleFileChange, resetKey }) => {

    const { config } = useConfigContext();

    return (
        <form className='productsNew' onSubmit={handleSubmit}>

            <section className='column'>

                <label>
                    Nombre
                    <input
                        type="text" name='name' value={values?.name || ''} onChange={handleChange}
                        placeholder='Nombre del producto' required
                    />
                </label>

                <label>
                    Descripción
                    <input
                        type="text" name='description' value={values?.description || ''} onChange={handleChange}
                        placeholder='Espesificación adicional' required
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

                <div className='productsNewPreMod'>
                    <label>
                        Categoría
                        <select name="category" value={values?.category || ''} onChange={handleChange} required>
                            {config && config.categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </label>
                    <Tooltip text='Agregar' backgroundColor='#2C5469'>
                        <Icons
                            type='event' hover={true} color='#2C5469'
                            onClick={() => setModal({ open: true, type: 'categories' })}
                        />
                    </Tooltip>
                </div>

                <div className='productsNewPreMod'>
                    <label>
                        Familia
                        <select name="family" value={values?.family || ''} onChange={handleChange}>
                            <option value="">Seleccionar familia</option>
                            {config && config.families.map(fam => (
                                <option key={fam} value={fam}>{fam}</option>
                            ))}
                        </select>
                    </label>
                    <Tooltip text='Agregar' backgroundColor='#2C5469'>
                        <Icons
                            type='event' hover={true} color='#2C5469'
                            onClick={() => setModal({ open: true, type: 'family' })}
                        />
                    </Tooltip>
                </div>

                <label style={{ marginTop: '7px' }}>
                    Costo
                    <input
                        type="text" name='cost' value={values?.cost || ''} onChange={handleChange}
                        required placeholder='0'
                    />
                </label>

            </section>

            <section className='column'>

                <div className='productsNewPreMod'>
                    <label>
                        Marca
                        <select name="brand" value={values?.brand || ''} onChange={handleChange} required>
                            {config && config.brands.map(brand => (
                                <option key={brand} value={brand}>{brand}</option>
                            ))}
                        </select>
                    </label>
                    <Tooltip text='Agregar' backgroundColor='#2C5469'>
                        <Icons
                            type='event' hover={true} color='#2C5469'
                            onClick={() => setModal({ open: true, type: 'brands' })}
                        />
                    </Tooltip>
                </div>

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

                <div className='productsNewPreMod'>
                    <label>
                        Sub-categoría
                        <select name="subCategory" value={values?.subCategory || ''} onChange={handleChange} required>
                            {config && config.subCategories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </label>
                    <Tooltip text='Agregar' backgroundColor='#2C5469'>
                        <Icons
                            type='event' hover={true} color='#2C5469'
                            onClick={() => setModal({ open: true, type: 'subCategories' })}
                        />
                    </Tooltip>
                </div>

                <label>
                    Mínimo de compra
                    <input
                        type="text" name='minimum' value={values?.minimum || ''} onChange={handleChange}
                        placeholder='1'
                    />
                </label>

                <label style={{ marginTop: '7px' }}>
                    Ubicación
                    <select name="location" value={values?.location || ''} onChange={handleChange} required>
                        <option value="none">Ninguna</option>
                        <option value="opportunity">Oportunidad</option>
                        <option value="launch">Lanzamiento</option>
                    </select>
                </label>

            </section>

            <section className='column'>
                <CloudFile onChange={handleFileChange} folderName='products' contClass='cfRect' key={resetKey} />

                <input
                    type="text" name='img' value={values?.img || ''} onChange={handleChange}
                    placeholder='Url de una imágen'
                />

                <Switch label='Stock' name='stock' values={values} setValues={setValues} />

                <button className='btn btnA'>Crear</button>
            </section>

        </form>
    );
};

export default ProductsNewHtml;