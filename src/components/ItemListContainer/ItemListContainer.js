import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import LoadingCardContainer from '../LoadingCardContainer/LoadingCardContainer'
import { useParams } from 'react-router-dom'
import CategoryFilter from '../CategoryFilter/CategoryFilter'
import { collection, getDocs, query, where } from "firebase/firestore"
import { productsDataBase } from "../../firebase/config"


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {productCategory} = useParams()
    console.log(productCategory)

    useEffect(() => {
        setLoading(true)

        // 1. Armar Referencia (Sincrónica)
        const productsReference = collection(productsDataBase, "products")
        const q = productCategory
                    ? query(productsReference, where("category", "==", productCategory))
                    : productsReference

        // 2. Llamar a la referencia (Asincrónica)
        
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

        //pedirDatos()
         //   .then((res) => {
         //       if(productCategory) {
         //           setProductos(res.filter((prod) => prod.category === productCategory))
         //       } else {
         //           setProductos(res)
         //       }
        //        setLoading(false)
        //    })
         //   .catch((error) => {
         //       console.log(error)
         //   })
         //   .finally(()=> {
         //       setLoading(false)
         //   })
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