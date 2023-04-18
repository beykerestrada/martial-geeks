import './ItemDetailContainer.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { dataBase } from '../../firebase/config'
import { getDoc, doc } from 'firebase/firestore'
import { Loading } from '../Loading/Loading'

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(dataBase, "products", productId)

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

    if(loading){
        return <Loading/>
    }

    return (
        <div className="itemDetailContainer">
            <ItemDetail item={item} />

        </div>
    )
}

export default ItemDetailContainer