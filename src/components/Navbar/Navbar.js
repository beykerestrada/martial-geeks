import { CartWidget } from '../CartWidget/CartWidget'
import { LoginOrSignupButton } from '../LoginOrSingupButton/LoginOrSignupButton'
import { LogoutButton } from '../LogoutButton/LogoutButton'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { HiMenuAlt3 } from 'react-icons/hi'
import { useAuth } from "../../context/AuthContext";
import { FaUserAlt } from "react-icons/fa"
export const Navbar = () => {
    const { user } = useAuth()
    const [toggle, setToggle] = useState(false)

    return (
        <header className="header">
            <div className="header__container">
                <Link to={"/"} className='nav__logo'><img src='https://martial-geeks.s3.sa-east-1.amazonaws.com/logo.png' alt='' className="header__logo" /></Link>


                <nav className=" nav hidden md:flex items-center justify-center">
                    <Link to={"/"} className='nav__item nav__option'>inicio</Link>
                    <Link to={"/tienda"} className='nav__item nav__option'>tienda</Link>
                    <CartWidget />
                    <div className=' nav__item userWidget'>
                        <LoginOrSignupButton />
                        <LogoutButton />
                    </div>
                </nav>

                {/* Menú responsive */}
                <div className='flex md:hidden'>
                    {
                        toggle ?
                            <MdClose
                                className='text-[30px] object-contain cursor-pointer '
                                onClick={() => setToggle(!toggle)} />
                            :
                            <HiMenuAlt3
                                className='my-auto text-[30px] object-contain cursor-pointer'
                                onClick={() => setToggle(!toggle)} />
                    }
                    <nav className={toggle ? "nav-responsive" : "hidden"}>
                        <Link to={"/"} className='nav-responsive__item nav-responsive__option' onClick={() => setToggle(!toggle)}>inicio</Link>
                        <Link to={"/tienda"} className='nav-responsive__item nav-responsive__option'
                            onClick={() => setToggle(!toggle)}>tienda</Link>
                        <CartWidget />
                        <div className={"logoutButton-container logoutButton-container-active userWidget-responsive userIcon-container"}>
                            <acronym className={"acronimo"} title={user ? "Ir al perfil" : "Ingreso / Registro"}>
                                <Link to={user ? "/cuenta" : "/login"} onClick={() => setToggle(!toggle)} className="logoutButton userIcon-container" >
                                    <FaUserAlt className={`logOut user`} />
                                    <p className="user__p">{!user ? "Ingresar" : "Compras"}</p>
                                </Link>
                            </acronym>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )


}