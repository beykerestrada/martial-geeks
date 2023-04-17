
export const ProductsList = ({ products }) => {
    return (
      <>
        {products.map((item) => (
          <ul key={item.id}>
            <li>Nombre: {item.name}</li>
            <li>Id de producto: {item.id}</li>
            <li>Cantidad: {item.cantidad}</li>
            <li>Precio: {item.price}</li>
          </ul>
        ))}
      </>
    );
  };