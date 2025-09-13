import './dashSaleCustomer.css';

const DashSaleCustomer = ({ values, setValues }) => {

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    const handleLocation = (e) => setValues({
        ...values,
        location: { ...values.location, [e.target.name]: e.target.value }
    });

    return (
        <div className="dashSaleCustomer">
            <input
                type="text" name="name" placeholder="Nombre" required
                value={values?.name || ''} onChange={handleChange}
            />

            <input
                type="email" name="email" placeholder="Email"
                value={values?.email || ''} onChange={handleChange}
            />

            <input
                type="phone" name="phone" placeholder="Teléfono"
                value={values?.phone || ''} onChange={handleChange}
            />

            <input
                type="text" name="city" placeholder="Ciudad, barrio"
                value={values?.location?.city || ''} onChange={handleLocation}
            />

            <input
                type="text" name="address" placeholder="Dirección"
                value={values?.location?.address || ''} onChange={handleLocation}
            />

        </div>
    );
};

export default DashSaleCustomer;