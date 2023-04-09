import { useContext } from 'react'
import './Cart.scss'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem';

export const Cart = () => {
    const { cart, vaciarCarrito, removerItem, totalCarrito, totalCantidad } = useContext(CartContext)

    return (
        <div className="section-container">
            <h2 className="section-container__title">Termina tu compra</h2>
            <hr />
            <div className='cart-container'>
                <div className='cartProducts-container'>
                    {
                        cart.map((item) => <CartItem
                            remover={removerItem}
                            key={item.id}
                            item={item}
                        />
                        )
                    }
                </div>
                <div className='cartSummary'>
                    <div className='summaryText'>
                        <h3 className='summaryTitle'>Revisa el detalle de tu compra</h3>
                        <hr/>
                        <h3>Productos: {totalCantidad()}</h3>
                        <h3>Total a pagar: <span>${totalCarrito()}</span> </h3>
                    </div>

                    <div className='summaryButtons'>
                        <button className=' primaryButton btn-checkout'>Pagar</button>
                        <button onClick={vaciarCarrito} className='btn-vaciarCarrito'>Vaciar carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
