import './CartWidget.scss'
import { MdShoppingCart } from "react-icons/md";

export const CartWidget = () => {
     return (
        <div className='cart-container'>
            <button>
            <MdShoppingCart className='cartWidget'/>
            </button>
            <div className='cart__indicator'>
            <span className='cart__indicator__span'>1</span>
            </div>
        </div>
     )
}