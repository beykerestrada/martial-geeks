import { CartWidget } from '../CartWidget/CartWidget'
import './Navbar.scss'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img src='./img/logo.png' className="header__logo"/>
                <nav className="nav">
                    <a href="#" className='nav__item'>Equipo</a>
                    <a href="#" className='nav__item'>Protecciones</a>
                    <a href="#" className='nav__item'>Vestuario</a>
                    <CartWidget/>
                </nav>
                
            </div>
        </header>
    )
       
    
}