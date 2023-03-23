import { CartWidget } from '../CartWidget/CartWidget'
import './Navbar.scss'
import { Link } from 'react-router-dom'
export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
            <Link to={"/"} className='nav__logo'><img src='https://martial-geeks.s3.sa-east-1.amazonaws.com/logo.png' alt='' className="header__logo"/></Link>

                
                <nav className="nav">
                    <Link to={"/"} className='nav__item'>inicio</Link>
                    <Link to={"/"} className='nav__item'>nosotros</Link>
                    <Link to={"/"} className='nav__item'>tienda</Link>
                    <CartWidget/>
                </nav>
                
            </div>
        </header>
    )
       
    
}