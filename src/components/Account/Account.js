import { useAuth } from "../../context/AuthContext"
import { getDocs, query, collection, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { dataBase } from "../../firebase/config";
import OrderList from "../OrderList/OrderList";
import LoadingCardContainer from "../LoadingCardContainer/LoadingCardContainer";


export const Account = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    const userUid = user.uid

    useEffect(() => {

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
            })

    }, [userUid])


    return (
        <div className="list-container">
            <h2 className="list-container__title">Mis compras</h2>
            <hr />
            {
                !orders
                    ? <LoadingCardContainer />
                    :
                    <div>
                        <OrderList items={orders} />
                    </div>
            }
        </div>
    )
}