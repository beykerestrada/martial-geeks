import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ item }) => {

    return (
        <div className='itemDetail'>
            <div className='itemDetail__description'>
                <div className='itemDetail__img'>
                    <img src={item.img} alt={item.name} />
                </div>
                <hr />
                <p>{item.description}</p>
            </div>
            <div className='itemDetail-summary'>
                <h2>{item.name}</h2>
                <p>Precio: <span>{item.price}</span> </p>
                <ItemCount />
            </div>
        </div>
    )
}

export default ItemDetail