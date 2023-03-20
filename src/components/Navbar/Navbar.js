import { CartWidget } from '../CartWidget/CartWidget'
import './Navbar.scss'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img src='./img/logo.png' alt='' className="header__logo"/>
                <nav className="nav">
                    <button className='nav__item'>Equipo</button>
                    <button className='nav__item'>Protecciones</button>
                    <button className='nav__item'>Vestuario</button>
                    <CartWidget/>
                </nav>
                
            </div>
        </header>
    )
       
    
}