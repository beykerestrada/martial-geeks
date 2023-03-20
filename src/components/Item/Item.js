import './Item.scss'

const Item = ({ item }) => {

    return (
        <div className='product-card'>
            <div className='product-img'>
                <img src={item.img} alt={item.name}/>
            </div>
            <div className='product-name'>
                <h3>{item.name}</h3>
                <hr/>
            </div>
            <div className='product-description'>
                <p>{item.description}</p>
            </div>
            <div className='product-price'>
                <p>{item.price}</p>
            </div>
            <div className='product-button'>
                <button className='secondaryButton'>Ver más</button>
            </div>
        </div>
    )
}

export default Item