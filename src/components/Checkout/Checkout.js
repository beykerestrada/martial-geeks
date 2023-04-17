import "../scss/forms.scss"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { EmptyCartRouter } from "../EmptyCartRouter/EmptyCartRouter"
import { dataBase } from "../../firebase/config"
import { collection, documentId, where, getDocs, query, writeBatch, addDoc } from "firebase/firestore"
import LoadingCardContainer from "../LoadingCardContainer/LoadingCardContainer"
import { OrderSummary } from "../OrderSummary/OrderSummary"
import { useAuth } from "../../context/AuthContext"




export const Checkout = () => {
    const { user } = useAuth()
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext)
    const [values, setValues] = useState({
        nombre: user.displayName,
        direccion: "",
        telefono: ""
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const order = {
            uid: user.uid,
            buyer: values,
            products: cart,
            total: totalCarrito(),
            date: new Date().toLocaleDateString()
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
        } else {
            alert("Uno o más productos se ecuentran: " + outOfStock.map(i => i.name).join(', '))
        }
        setLoading(false)
        vaciarCarrito()
    }

    if (loading) {
        return <LoadingCardContainer />
    }
    if (orderId) {
        return (
            <OrderSummary
                orderId={orderId}
                buyerInfo={values}
                total={totalCarrito()}
                
            />
        );

    }

    if (cart.length === 0) {
        return <EmptyCartRouter />
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="formTitle">
                    <h3>Ingresa tus datos para terminar tu compra</h3>
                    <hr />
                </div>
                <div className="input-container">
                    <label className="label" htmlFor="direccion">Direccion de envío</label>
                    <input
                        value={values.direccion}
                        type="text"
                        className="input-text"
                        placeholder="Av. San juan 334, dpto 701, Santiago, Region Metropolitana"
                        onChange={handleInputChange}
                        name="direccion"
                    />
                </div>
                <div className="input-container">
                    <label className="label" htmlFor="telefono">Teléfono</label>
                    <input
                        value={values.telefono}
                        type="tel"
                        className="input-text"
                        placeholder=""
                        onChange={handleInputChange}
                        name="telefono"
                    />
                </div>
                <button className="formButton checkoutButton" type="submit">Aceptar</button>
            </form>
        </div>
    )
}