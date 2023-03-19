import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import LoadingCardContainer from '../LoadingCardContainer/LoadingCardContainer'



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        pedirDatos()
            .then((res) => {
                setProductos(res)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(()=> {
                setLoading(false)
            })
    }, [])

    return (
        <div className="list-container">
            <h2 className="list-container__title">Productos</h2>
            <hr/>
            {
                loading 
                ? <LoadingCardContainer/> 
                : <ItemList items={productos}/>
            }
        </div>
    )
}

export default ItemListContainer