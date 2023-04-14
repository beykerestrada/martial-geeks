import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { EmptyCartRouter } from "../EmptyCartRouter/EmptyCartRouter"
import { dataBase } from "../../firebase/config"
import { collection, documentId, where, getDocs, query, writeBatch, addDoc } from "firebase/firestore"

export const Checkout = () => {

    const [orderId, setOrderId] = useState(null)
    const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext)
    const [values, setValues] = useState({
        nombre: "",
        apellido: "",
        direccion: "",
        email: ""
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault() 

        const order = {
            buyer: values,
            products: cart,
            total: totalCarrito(),
            date: new Date()
        }
    
        const batch = writeBatch(dataBase)
        const orderReference = collection(dataBase, "orders")
        const productosReference = collection(dataBase, "products")
        const q = query(productosReference, where(documentId(), "in", cart.map(item => item.id)))
        const outOfStock = []
        const products = await getDocs(q)
        
        products.docs.forEach((doc) => {
            const item = cart.find((prod) => prod.id === doc.id)
            
            if (doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()
            const { id } = await addDoc(orderReference, order)
            setOrderId(id)
            vaciarCarrito()
            
        } else {
            alert("Hay items sin stock: " + outOfStock.map(i => i.name).join(', '))
        }

    }

    

    if(orderId) {
        return (
            <div className="section-container">
                <h2>¡Felicidades! Tu compra ha sido realizada</h2>
                <h4>Este es tu número de orden: <b>{orderId}</b></h4>
            </div>
        )
    }

    if(cart.length === 0) {
        return <EmptyCartRouter/>
    }

    return (
        <div className="section-container">
            <h2 className="section-container__title">Ingresa tus datos</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
            <input
                    value={values.nombre}
                    type="text"
                    className="input-text"
                    placeholder="Nombre"
                    onChange={handleInputChange}
                    name="nombre"
            />
            <input
                    value={values.apellido}
                    type="text"
                    className="input-text"
                    placeholder="Apellido"
                    onChange={handleInputChange}
                    name="apellido"
            />
            <input
                    value={values.direccion}
                    type="text"
                    className="input-text"
                    placeholder="Direccion"
                    onChange={handleInputChange}
                    name="direccion"
            />
            <input
                    value={values.email}
                    type="email"
                    className="input-text"
                    placeholder="email"
                    onChange={handleInputChange}
                    name="email"
            />
                
            <button className="primaryButton" type="submit">Aceptar</button>    
            </form>
        </div>
    )
}