import './dutmConfig.css';

const DutmConfig = ({ user }) => {

    console.log(user);

    return (
        <div className='dutmConfig column'>
            <h3>Configuración de {user.name}</h3>

            <div className='line'></div>

            <select name="price">
                <option value="" hidden>Lista de precios</option>
                <option value="a" >Lista A</option>
                <option value="b" >Lista B</option>
                <option value="c" >Lista C</option>
            </select>

            {/* trabajar */}
            <p className='pgray'>Acá que pueda seleccioanr un producto y poner un descuento especial</p>

            <div className='line'></div>

            <select name="seller">
                <option value="" hidden>Vendedor asignado</option>
                <option value="a" >Fabián</option>
                <option value="b" >Erika</option>
            </select>
            
            <select name="zone">
                <option value="" hidden>Zona</option>
                <option value="a" >Zona 1</option>
                <option value="a" >Zona 2</option>
                <option value="a" >Zona 3</option>
            </select>

        </div>
    );
};

export default DutmConfig;