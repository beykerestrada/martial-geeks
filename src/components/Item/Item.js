import './Item.scss'
import { Link } from 'react-router-dom'
const Item = ({ item }) => {
    const estandarPesosChilenos = Intl.NumberFormat('es-CL');
    return (
        <div className='product-card'>
            <Link to={`/item/${item.id}`} className='product-img'>
                <img src={item.img} alt={item.name}/>
            </Link>
            <hr/>
            <div className='category-container'>
                <p>
                    <small><Link className='card-link' to={`/category/${item.category}`} >{item.category}</Link></small>
                </p>
            </div>
            <Link to={`/item/${item.id}`} className='product-name item-link'>
                <h3>{item.name}</h3>
                
            </Link>
            <Link to={`/item/${item.id}`} className='product-price item-link'>
                <p>$ { estandarPesosChilenos.format(item.price) }</p>
            </Link>
            <div className='product-button'>
                <Link to={`/item/${item.id}`} className='secondaryButton'>Ver más</Link>
            </div>
        </div>
    )
}

export default Item