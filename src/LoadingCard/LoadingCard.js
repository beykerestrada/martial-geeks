import './LoadingCard.scss'
//Esta tarjeta se muestra mientras se obtienen los datos de los productos para poder renderizar las tarjetas reales
const LoadingCard = () => {

    return (
        <div className='loadingCard'>
            <div className='loading-1'>
                
            </div>
            <div className='loading-2'>
            </div>
            <div className='loading-3'>
                <div className='child child-1'></div>
                <div className='child child-2'></div>
                <div className='child child-3'></div>
                <div className='child child-3'></div>
            </div>
            <div className='loading-4'>
         
            </div>
            <div className='loading-5'>
            </div>
        </div>
    )
}

export default LoadingCard
