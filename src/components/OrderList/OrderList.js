import Order from "../Order/Order"

const OrderList = ( {items} ) => {

    return (
        <div className="itemList">
            <div className='products-container'>
                { items.map((orders) => <Order key={orders.id}  id={orders.id}  item={orders}/>) }
            </div>
        </div>
    )
}

export default OrderList