
export const ProductsList = ({ products }) => {

  const estandarPesosChilenos = Intl.NumberFormat('es-CL');
  
  return (
    <>
      {products.map((item) => (
        <div key={item.id} className="products-list-container">
          <div className="products-list-img">
            <img src={item.img}  alt={item.name}/>
          </div>
          <div className="products-list-text">
            <p><strong>Id de producto:</strong> {item.id}</p>
            <p><strong>Nombre:</strong> {item.name}</p>
            <p><strong>Cantidad:</strong> {item.cantidad}</p>
            <p><strong>Precio:</strong> $ {estandarPesosChilenos.format(item.price)}</p>
          </div>
        </div>
      ))}
    </>
  );
};