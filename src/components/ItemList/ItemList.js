import './ItemList.scss'
import Item from "../Item/Item"

const ItemList = ( {items} ) => {

    return (
        <div className="itemList">
            <div className='products-container'>
                { items.map((producto) => <Item key={producto.id} item={producto}/>) }
            </div>
        </div>
    )
}

export default ItemList