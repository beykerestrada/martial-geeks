import { useAuth } from "../../context/AuthContext"
import { getDocs, query, collection, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { dataBase } from "../../firebase/config";
import OrderList from "../OrderList/OrderList";
import { Loading } from "../Loading/Loading";
import "./Account.scss"

export const Account = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    const userUid = user.uid
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        // 1. Armar Referencia de Firebase(Sincrónica)
        const orderReference = collection(dataBase, "orders")
        const q = userUid
            ? query(orderReference, where("uid", "==", userUid))
            : orderReference

        getDocs(q)
            .then((res) => {
                setOrders(res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
                setLoading(false)
            })
            .finally(
                setLoading(false)
            )

    }, [userUid])
    if(loading) {
        return <Loading/>
    }

    return (
        <div className="section-container">
            <h2 className="list-container__title">Mis compras</h2>
            <hr />
                    <div className="oders-container">
                        <OrderList items={orders} />
                    </div>
        </div>
    )
}