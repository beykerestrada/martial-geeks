import Order from "../Order/Order"

const OrderList = ( {items} ) => {

    return (
        <div className="">
            <div className=''>
                { items.map((orders) => <Order key={orders.id}  id={orders.id}  item={orders}/>) }
            </div>
        </div>
    )
}

export default OrderList