import { ProductsList } from "../ProductsList/ProductsList"

const Order = ({ item, id }) => {

    const products = item.products
    console.log(products)
    return (
        <div className='order-card'>
            <div className="order-card-products-container">
                <p className="order-products"><ProductsList products={products} /></p>
            </div>
            <div className="order-card-summary">
                <p className="order-number"><strong>Numero de órden:</strong> {id} </p>
                <p className="order-date"><strong>Fecha:</strong> {item.date}</p>
                <p className="order-address"><strong>Dirección de envío:</strong> <br /> {item.buyer.direccion}</p>
                <p className="order-phone"><strong>Teléfono:</strong> {item.buyer.telefono}</p>
                <p className="order-total"><strong>Total:</strong>  ${item.total} </p>
            </div>
        </div>
    )
}

export default Order