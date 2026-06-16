import './listTable.css';

const ListTable = ({ products, printList }) => {

    return (
        <div className="listTable" ref={printList}>

            <section className='listTableTitle'>
                <div>
                    <h3>La colonial</h3>
                    <p className='pgray'>11-5943-7955</p>
                    <p className='pgray'>https://lacolonial.cloud</p>
                </div>
                <img src="https://res.cloudinary.com/ddjldilsm/image/upload/v1781640799/Imagen1_xr4oul.webp" alt="qr" />
            </section>

            <section className='listTableProd'>
                {products && products?.map(prod => (
                    <p key={prod._id}>{prod.name} {prod.brand} {prod.description} <strong>${prod.price}</strong></p>
                ))}
            </section>
        </div>
    );
};

export default ListTable;