import { CartWidget } from '../CartWidget/CartWidget'
import './Navbar.scss'
import { Link } from 'react-router-dom'
export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
            <Link to={"/"} className='nav__logo'><img src='./img/logo.png' alt='' className="header__logo"/></Link>

                
                <nav className="nav">
                    <Link to={"/"} className='nav__item'>Equipo</Link>
                    <Link to={"/"} className='nav__item'>Protecciones</Link>
                    <Link to={"/"} className='nav__item'>Vestuario</Link>
                    <CartWidget/>
                </nav>
                
            </div>
        </header>
    )
       
    
}