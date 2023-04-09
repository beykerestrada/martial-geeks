import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    // Funcion para setear el estado del carrito
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
    // const editCantidad = (id, num) => {
    //     const _cart = cart.slice()
    //     const item = _cart.find((prod) => prod.id === id)
    //     item.cantidad += num

    //     setCart(_cart)
    // }
    const removerItem = (id) => {
        setCart( cart.filter((prod) => prod.id !== id) )
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const totalCarrito = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)
    }

    return (
        // Context será consumido por algunos children para recibir los datos del carrito y agregar mas items
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCantidad,
            vaciarCarrito,
            removerItem,
            totalCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}