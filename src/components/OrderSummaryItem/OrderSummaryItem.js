import "./OrderSummaryItem.scss"

export const OrderSummaryItem = ({ item }) => {

    return (
        <div key={item.id} className='orderSummaryItem-container'>
            <div className='orderSummaryItem__img'>
                <img src={item.img} alt={item.name} />
            </div>
            <div className='orderSummaryItem__summary'>
                <h4>{item.name}</h4>
                <div className='small-container'>
                    <small>Precio: ${item.price}</small>
                    <small>Cantidad: {item.cantidad}</small>
                </div>
                <p className='totalPrice'>Precio total: <span>${item.price * item.cantidad}</span> </p>
            </div>
            <hr />
        </div>
    )
}