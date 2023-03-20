import './ItemCount.scss'
import { useState } from "react"
import { SecondaryButton } from '../Button/SecondaryButton'


const ItemCount = () => {
    const [counter, setCounter] = useState(0)

    const sumarItem = () => {
        setCounter(counter + 1)
    }

    const restarItem = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }





    return (
        <div className='itemCount'>
            <div className="counter-container">
                <button className='btn-counter btn-counter__resta' onClick={restarItem} >-</button>
                <div>
                    <p>{counter}</p>
                </div>
                <button className='btn-counter btn-counter__suma' onClick={sumarItem} >+</button>
            </div>
            <SecondaryButton text={"Añadir al carrito"}/>
        </div>
    )
}

export default ItemCount