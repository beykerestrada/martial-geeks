export const OrderSummaryItem = ({ item }) => {

    return (
        <div key={item.id} className='cartItem-container'>
            <div className='cartItem__img'>
                <img src={item.img} alt={item.name} />
            </div>
            <div className='cartItem__summary'>
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