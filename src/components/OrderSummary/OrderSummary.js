import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { dataBase } from "../../firebase/config";
import "./OrderSummary.scss"
import { OrderSummaryItem } from "../OrderSummaryItem/OrderSummaryItem"

export const OrderSummary = ({ orderId }) => {
  const [order, setOrder] = useState(null);

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
      <h2 className="section-container__title">Detalles de la Orden</h2>
      <hr />
      <h3 className="section-contianer__subtitle">¡Felicidades! Tu compra se realizó de manera exitosa</h3>

      <div className="orderSummary-container">
        <h3>Guarda estos detalles:</h3>
        <hr />
        <p><strong>Número de orden:</strong> {orderId}</p>
        <p><strong>Nombre:</strong> {order.buyer.nombre} {order.buyer.apellido}</p>
        <p><strong>Dirección de envío:</strong> {order.buyer.direccion}</p>
        <p><strong>Productos comprados:</strong></p>
        <ul>
          {order.products.map((item) =>
            <OrderSummaryItem
              key={item.id}
              item={item}
            />
          )
          }
        </ul>
        <h4 className="orderSummary-total"><strong>Total de la orden:</strong> <span>${order.total}</span></h4>
      </div>
    </div>
  );
};