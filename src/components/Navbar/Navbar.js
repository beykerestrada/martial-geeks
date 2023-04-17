import { CartWidget } from '../CartWidget/CartWidget'
import { LoginOrSignupButton } from '../LoginOrSingupButton/LoginOrSignupButton'
import { LogoutButton } from '../LogoutButton/LogoutButton'
import './Navbar.scss'
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (
        <header className="header">
            <div className="header__container">
                <Link to={"/"} className='nav__logo'><img src='https://martial-geeks.s3.sa-east-1.amazonaws.com/logo.png' alt='' className="header__logo" /></Link>


                <nav className="nav">
                    <Link to={"/"} className='nav__item nav__option'>inicio</Link>
                    <Link to={"/"} className='nav__item nav__option'>nosotros</Link>
                    <Link to={"/"} className='nav__item nav__option'>tienda</Link>
                    <CartWidget />
                    <div className=' nav__item userWidget'>
                            <LoginOrSignupButton />
                            <LogoutButton />
                    </div>
                </nav>
            </div>
        </header>
    )


}