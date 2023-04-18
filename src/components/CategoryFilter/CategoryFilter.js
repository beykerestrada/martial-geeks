import './CategoryFilter.scss'
import { Link } from "react-router-dom"

const CategoryFilter = () => {

    return (
        <div className='categoryFilter-container'>
            <div className="categoryFilter__h4">
                <h4>Categorías:</h4>
            </div>
            <div className="categoryFilter-links">
                <Link to={"/tienda"} className='category__item'>ver todo</Link>
                <Link to={"/category/equipamiento"} className='category__item'>equipamiento</Link>
                <Link to={"/category/protecciones"} className='category__item'>protecciones</Link>
                <Link to={"/category/vestuario"} className='category__item'>vestuario</Link>
            </div>
        </div>
    )
}

export default CategoryFilter