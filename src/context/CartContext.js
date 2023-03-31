import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    // Se funcion para setear el estado del carrito
    const [cart, setCart] = useState([])
    console.log(cart)

    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }
    const totalCantidad = () => {
        return cart.reduce((acumulador, prod) => acumulador + prod.cantidad, 0)
    }

    return (
        // Context será consumido por algunos children para recibir los datos del carrito y agregar mas items
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCantidad
        }}>
            {children}
        </CartContext.Provider>
    )
}