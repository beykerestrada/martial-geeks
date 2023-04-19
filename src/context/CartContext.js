import { createContext, useEffect } from "react";
import { useState } from "react";
import { dataBase } from "../firebase/config"
import { doc, updateDoc, arrayUnion, getDoc, setDoc, arrayRemove } from 'firebase/firestore';
import { useAuth } from "./AuthContext";



export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const { user } = useAuth()
    const uid = user?.uid
    const cartReference = uid && doc(dataBase, "carts", uid)




    const [cart, setCart] = useState([])

    useEffect(() => {
       
        const getCart = async () => {
            try {
                const docSnap = await getDoc(cartReference);
                if (docSnap.exists()) {
                    
                    const cartData = docSnap.data();
                    setCart(cartData.productos);
                } else {
                   
                    await setDoc(cartReference, { productos: [] });
                }
            } catch (error) {
                console.error("Error al obtener el carrito", error);
            }
        };

        if (user) {
            getCart();
        }
    }, [user, cartReference]);

    const agregarAlCarrito = (item) => {
        setCart([...cart, item]);
        updateDoc(cartReference,  { productos: arrayUnion(item) }, { merge: true });
    }
    
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }
    const totalCantidad = () => {
        return cart.reduce((acumulador, prod) => acumulador + prod.cantidad, 0)
    }


    const removerItem = async (id) => {
        try {
            await updateDoc(cartReference, { productos: arrayRemove({ id: id, ...cart.find(prod => prod.id === id) }) });
            setCart(cart.filter((prod) => prod.id !== id));
        } catch (error) {
            console.error("Error al eliminar el item del carrito", error);
        }
    }

    const vaciarCarrito = async () => {
        setCart([]);
        try {
            // Actualizar el campo "productos" del documento en Firebase con un arreglo vacío
            await updateDoc(cartReference, { productos: [] });
        } catch (error) {
            console.error("Error al vaciar el carrito", error);
        }
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