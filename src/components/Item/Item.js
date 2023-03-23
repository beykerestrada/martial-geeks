import './Item.scss'
import { Link } from 'react-router-dom'
const Item = ({ item }) => {

    return (
        <div className='product-card'>
            <div className='product-img'>
                <img src={item.img} alt={item.name}/>
            </div>
            <hr/>
            <div className='category-container'>
                <p>
                    <small><Link className='card-link' to={`/category/${item.category}`} >{item.category}</Link></small>
                </p>
            </div>
            <div className='product-name'>
                <h3>{item.name}</h3>
                
            </div>
            <div className='product-price'>
                <p>{item.price}</p>
            </div>
            <div className='product-button'>
                <Link to={`/item/${item.id}`} className='secondaryButton'>Ver más</Link>
            </div>
        </div>
    )
}

export default Item