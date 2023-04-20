import './CartWidget.scss'
import { MdShoppingCart } from "react-icons/md";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const CartWidget = () => {
    const { totalCantidad, cart } = useContext(CartContext)
    const { user } = useAuth();

    return (
        <div className={`cartWidget-container ${user && cart.length > 0 ? 'cartWidget-container-active' : ''}`}>
            <Link className='cartWidget' to="/cart">
                <MdShoppingCart className='cartWidget' />
            </Link>
            <div className='cart__indicator'>
                <span className='cart__indicator__span'>{totalCantidad()}</span>
            </div>
        </div>
    )
}