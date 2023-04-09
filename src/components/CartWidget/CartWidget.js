import './CartWidget.scss'
import { MdShoppingCart } from "react-icons/md";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext)
     
     return (
        <div className='cart-container'>
            <Link className='cartWidget' to="/cart">
            <MdShoppingCart className='cartWidget'/>
            </Link>
            <div className='cart__indicator'>
            <span className='cart__indicator__span'>{totalCantidad()}</span>
            </div>
        </div>
     )
}