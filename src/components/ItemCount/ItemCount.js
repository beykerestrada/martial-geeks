import './ItemCount.scss'



const ItemCount = ({max,  cantidad,  setCantidad, agregar}) => {
    

    const handleSumarItem = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestarItem = () => {
        
        cantidad > 1 && setCantidad(cantidad - 1)
        
    }


    return (
        <div className='itemCount'>
            <div className="counter-container">
                <button className='btn-counter btn-counter__resta' onClick={handleRestarItem} >-</button>
                <div>
                    <p>{cantidad}</p>
                </div>
                <button className='btn-counter btn-counter__suma' onClick={handleSumarItem} >+</button>
            </div>
            <button className='secondaryButton' onClick={agregar} >Agregar al carrito</button>
        </div>
    )
}

export default ItemCount