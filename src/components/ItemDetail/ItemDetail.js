import './ItemDetail.scss'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import { StockAlertRouter } from '../StockAlertRouter/StockAlertRouter'
import { useAuth } from '../../context/AuthContext'


const ItemDetail = ({ item }) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)
    const estandarPesosChilenos = Intl.NumberFormat('es-CL');
    const { user } = useAuth()
    const navigate = useNavigate()
    const handleAgregar = () => {

        if(!user) {
            navigate('/login');
        }
        
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
                <p>Precio: <span>${estandarPesosChilenos.format(item.price * cantidad)}</span> </p>

                {item.stock <= 8 && item.stock > 0 && (
                    <p className='stockAlert'> <strong>¡Última(s) {item.stock} unidad(es)! </strong> </p>
                )}

                {
                    item.stock === 0
                        ? <StockAlertRouter/>
                        : isInCart(item.id)
                            ? 
                            <div className='cartRouter'>
                                <Link to={"/cart"} className=' primaryButton btn-goToCart'>Ir al Carrito</Link>
                                <Link to={"/tienda"} className=' secondaryButton btn-goToCart btn-goToShop'>seguir comprando</Link>
                            </div> 
                            : <ItemCount
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