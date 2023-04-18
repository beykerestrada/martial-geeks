import './Hero.scss'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='hero-bg'>
            <section className="hero-container">
                <div className="hero">
                    <div className="hero__img">
                        <img src="https://martial-geeks.s3.sa-east-1.amazonaws.com/casco.png" alt="casco de artes marciales" />
                    </div>
                    <div className="hero__text">
                        <h2 className="hero__h2">
                            <span>
                                Combate con
                            </span>
                            <span>
                                seguridad
                            </span>
                        </h2>
                        <p className="hero__p"> Equipamiento de calidad para  artes marciales</p>
                        <span className="hero__span"> Testeado por profesionales</span>
                        <div className="hero__btn-container">
                            <Link to={"/tienda"} className=' primaryButton cta-btn'>
                                Ver productos
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='middle-title'>
                    <h2>
                        ¿Que nos hace diferentes?
                    </h2>
                </div>
                <div className='banner-container'>
                    <div className='banner-text'>
                        <h2>
                            ¡Somos artistas marciales!
                        </h2>
                        <h4>
                            Entendemos lo que buscas porque nosotros también lo buscamos.
                        </h4>
                        <p>
                            Todos nuestros productos son sometidos a pruebas en condiciones intensas de enternamiento y sparring para asegurar su calidad.
                        </p>
                        <p>
                            <strong>No te vendemos nada que no usariamos nosotros</strong>
                        </p>
                    </div>
                    <div className='banner-img'>
                        <div className='circle'>
                            <img src='https://martial-geeks.s3.sa-east-1.amazonaws.com/taekwondo-sparring.png' alt='Peleadores de taekwondo haciendo sparring' />
                        </div>
                    </div>
                </div>
                <section className='cta-section'>
                    <div className='cta-img'>
                        <img src='https://martial-geeks.s3.sa-east-1.amazonaws.com/hanging-gloves.png' alt='guantes rojos de boxeo colgados' />
                    </div>
                    <div className='cta-text'>
                        <h2>
                            ¿Nos vamos de Shopping?
                        </h2>
                        <Link to={"/tienda"} className=' primaryButton cta-btn'>
                            Veamos que hay de bueno
                        </Link>
                    </div>
                </section>
            </section>
        </div>

    )
}
export default Hero