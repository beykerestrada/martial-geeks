import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { dataBase } from "../../firebase/config";
import "./OrderSummary.scss"
import { OrderSummaryItem } from "../OrderSummaryItem/OrderSummaryItem"
import { useAuth } from "../../context/AuthContext";

export const OrderSummary = ({ orderId }) => {
  const [order, setOrder] = useState(null);
  const { user } = useAuth()
  useEffect(() => {
    const getOrder = async () => {
      const orderDoc = doc(dataBase, "orders", orderId);
      const orderData = await getDoc(orderDoc);
      if (orderData.exists()) {
        setOrder(orderData.data());
      } else {
        console.log("No se encontró la orden");
      }
    };

    getOrder();
  }, [orderId]);

  if (!order) {
    return <div>Cargando orden...</div>;
  }

  return (
    <div className="section-container">
      <h2 className="section-container__title">Compra finalizada</h2>
      <hr />
      <h3 className="section-contianer__subtitle">¡Felicidades! Tu compra se realizó de manera exitosa</h3>

      <div className="orderSummary-container">
        <h3>Detalles de tu compra:</h3>

        <p><strong>Número de orden:</strong> {orderId}</p>
        <p><strong>Nombre:</strong> {user.displayName}</p>
        <p><strong>Teléfono:</strong> {order.buyer.telefono}</p>
        <p><strong>Dirección de envío:</strong> {order.buyer.direccion}</p>
        <p><strong>Fecha de compra:</strong> {new Date().toLocaleDateString()}</p>
        <p className="products__p"><strong>Productos comprados:</strong></p>
        
        <div className="orderSummaryProducts-container">
          {order.products.map((item) =>
            <OrderSummaryItem
              key={item.id}
              item={item}
            />
          )}
        </div>
        <h4 className="orderSummary-total"><strong>Total de la compra:</strong> <span>${order.total}</span></h4>
      </div>
    </div>
  );
};