import './ItemDetail.scss'
const ItemDetail = ({item}) => {

    return (
        <div>
            <h2>{item.name}</h2>
            <hr/>
            <img src={item.img} alt={item.name}/>
            <p>Precio: ${item.price}</p>
            <p>{item.description}</p>
        </div>
    )
}

export default ItemDetail