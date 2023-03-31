import './ItemDetailContainer.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { productsDataBase } from '../../firebase/config'
import { getDoc, doc } from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    console.log(item)
    console.log(productId)

    useEffect(() => {
        setLoading(true)

        const docRef = doc(productsDataBase, "products", productId)

        getDoc(docRef)
        .then((doc) => {
            setItem({
                id: doc.id,
                ...doc.data()
            })
        }) 
        .finally(() => {
            setLoading(false)
        })
    }, [productId])

    return (
        <div className="itemDetailContainer">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer