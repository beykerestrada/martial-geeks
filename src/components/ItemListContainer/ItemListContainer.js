import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import CategoryFilter from '../CategoryFilter/CategoryFilter'
import { collection, getDocs, query, where } from "firebase/firestore"
import { dataBase } from "../../firebase/config"
import { Loading } from '../Loading/Loading'


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {productCategory} = useParams()


    useEffect(() => {
        setLoading(true)

        // 1. Armar Referencia de Firebase(Sincrónica)
        const productsReference = collection(dataBase, "products")
        const q = productCategory
                    ? query(productsReference, where("category", "==", productCategory))
                    : productsReference
        
        getDocs(q)
        .then((res) => {
            setProductos( res.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }))
        })
        .finally(() => setLoading(false))

    }, [productCategory])

    if(loading){
        return <Loading/>
    }

    return (
        <div className="list-container">
            <h2 className="list-container__title">Tienda</h2>
            <hr/>
            <CategoryFilter/>
                <div>
                    <ItemList items={productos}/>
                </div>
        </div>
    )
}

export default ItemListContainer