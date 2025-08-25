import './cartOutUser.css';

const CartOutUser = ({ values, setValues }) => {

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    const handleLocation = (e) => setValues({
        ...values,
        location: { ...values.location, [e.target.name]: e.target.value }
    });

    return (
        <div className="cartOutUser">

            <input
                type="text" name="name" placeholder="Nombre" required
                value={values?.name || ''} onChange={handleChange}
            />

            <input
                type="email" name="email" placeholder="Email" required
                value={values?.email || ''} onChange={handleChange}
            />

            <input
                type="phone" name="phone" placeholder="Teléfono" required
                value={values?.phone || ''} onChange={handleChange}
            />

            <input
                type="text" name="city" placeholder="Ciudad, barrio" required
                value={values?.location?.city || ''} onChange={handleLocation}
            />

            <input
                type="text" name="address" placeholder="Dirección" required
                value={values?.location?.address || ''} onChange={handleLocation}
            />

            {!values?._id &&
                <input
                    type="password" name="password" placeholder="Escribe una contraseña"
                    value={values?.password || ''} onChange={handleChange} required
                />
            }
        </div>
    );
};

export default CartOutUser;