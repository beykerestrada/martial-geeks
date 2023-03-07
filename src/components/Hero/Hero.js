import './Hero.scss'
import { Button } from "../Button/Button"

const Hero = () => { 
    return (
    <section className="hero-container">
        <div className="hero">
            <div className="hero__img">
                <img src="./img/kickboxer.png" alt="silueta de persona practicando kickboxing"/>
            </div>
            <div className="hero__text">
                <h2 className="hero__h2">
                    <span>
                    Combate
                    </span>
                    <span>
                    con
                    </span>
                    <span>
                    seguridad
                    </span>
                    </h2>
                <p className="hero__p"> Equipamiento profesional para la practica de artes marciales</p>
                <span className="hero__span"> Testeado por profesionales</span>
                <div className="hero__btn-container">
                    <Button text={"Comprar"}/>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Hero