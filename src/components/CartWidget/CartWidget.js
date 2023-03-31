import './CartWidget.scss'
import { MdShoppingCart } from "react-icons/md";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext)
     
     return (
        <div className='cart-container'>
            <button>
            <MdShoppingCart className='cartWidget'/>
            </button>
            <div className='cart__indicator'>
            <span className='cart__indicator__span'>{totalCantidad}</span>
            </div>
        </div>
     )
}