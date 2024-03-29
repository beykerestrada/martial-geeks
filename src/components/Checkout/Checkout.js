import "../scss/forms.scss"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { EmptyCartRouter } from "../EmptyCartRouter/EmptyCartRouter"
import { dataBase } from "../../firebase/config"
import { collection, documentId, where, getDocs, query, writeBatch, addDoc } from "firebase/firestore"
import { OrderSummary } from "../OrderSummary/OrderSummary"
import { useAuth } from "../../context/AuthContext"
import { Loading } from "../Loading/Loading"
import { FormAlert } from "../FormAlert/FormAlert"




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

    const [inputError, setInputError] = useState()
    const validateForm = () => {
        let inputErrors = {}
        let isValid = true

        if (!values.direccion) {
            inputErrors.direccion = 'Debes ingresar tu direccion'
            isValid = false
        }
        if (values.direccion.length < 10) {
            inputErrors.direccion = 'Direccion es muy corta por favor escribe tu dirección completa'
            isValid = false
        }

        if (!values.telefono) {
            inputErrors.telefono = 'Teléfono requerido'
            isValid = false
        }

        if (!values.telefono.length) {
            inputErrors.telefono = 'Al menos 9 caracteres'
            isValid = false
        }


        setInputError(inputErrors)
        return isValid
    }

    const inputErrorDireccion = inputError && inputError.direccion
    const inputErrorTelefono = inputError && inputError.telefono


    const handleSubmit = async (e) => {
        e.preventDefault()
        const isValid = validateForm()
        if (!isValid) {
            return // Evita que el formulario se envíe
        }
        try {
            setLoading(true)
            const fecha = new Date();
            const opciones = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
            const fechaFormateada = fecha.toLocaleString('es-CL', opciones);
            const order = {
                uid: user.uid,
                buyer: values,
                products: cart,
                total: totalCarrito(),
                date: fechaFormateada
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
        } catch (inputError) {
            console.log("este es el error =>   " + inputError)
            setInputError(inputError.code)
        }
    }

    if (loading) {
        return <Loading />
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
    const DEFAULT_ERROR_MESSAGE = "Hay errores en el fomulario, por favor corrige los campos"
    return (
        <div className="form-container">
            {inputError && <FormAlert message={DEFAULT_ERROR_MESSAGE} />}
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
                    {inputErrorDireccion && <span className="errorMessage">{inputErrorDireccion}</span>}
                </div>
                <div className="input-container">
                    <label className="label" htmlFor="telefono">Teléfono</label>
                    <input
                        value={values.telefono}
                        type="number"
                        className="input-text"
                        placeholder="912345678"
                        onChange={handleInputChange}
                        pattern="^[0-9]+$"
                        name="telefono"
                    />
                    {inputErrorTelefono && <span className="errorMessage">{inputErrorTelefono}</span>}
                </div>
                <div className="formButton-container">
                    <div></div>
                    <button className="formButton" type="submit">Finalizar compra</button>
                </div>
            </form>
        </div>
    )
}