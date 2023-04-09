import './ItemDetail.scss'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ item }) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)

    const  handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }

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
                <p>Precio: <span>${item.price}</span> </p>

                {
                    isInCart(item.id)
                    ?   <Link to={"/cart"} className=' primaryButton btn-goToCart'>Terminar compra</Link>
                    :   <ItemCount 
                            max={item.stock}
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            agregar={handleAgregar}
                        />
                }
                
            </div>
        </div>
    )
}

export default ItemDetail