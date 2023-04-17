import { ProductsList } from "../ProductsList/ProductsList"

const Order = ({ item, id }) => {

    const products = item.products
    console.log(products)
    return (
        <div className='order-card'>
            <hr />
            <p>Numero de órden: {id} </p>
            <p>Fecha: {item.date}</p>
            <p>Dirección de envío: <br /> {item.buyer.direccion}</p>
            <p>Teléfono: {item.buyer.telefono}</p>
            <p>Total: ${item.total}</p>
            <p>Productos <ProductsList products={products}/></p>
        </div>
    )
}

export default Order