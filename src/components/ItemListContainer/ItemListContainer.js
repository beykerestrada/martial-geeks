import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import LoadingCardContainer from '../LoadingCardContainer/LoadingCardContainer'
import { useParams } from 'react-router-dom'
import CategoryFilter from '../CategoryFilter/CategoryFilter'


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {productCategory} = useParams()
    console.log(productCategory)

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((res) => {
                if(productCategory) {
                    setProductos(res.filter((prod) => prod.category === productCategory))
                } else {
                    setProductos(res)
                }
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(()=> {
                setLoading(false)
            })
    }, [productCategory])

    return (
        <div className="list-container">
            <h2 className="list-container__title">Tienda</h2>
            <hr/>
            {
                loading 
                ? <LoadingCardContainer/> 
                : 
                <div>
                    <CategoryFilter/>
                    <ItemList items={productos}/>
                </div>
            }
        </div>
    )
}

export default ItemListContainer