import { Link } from "react-router-dom"

export const EmptyCartRouter = () => {
    return (
        <div className="section-container">
                <h2 className="section-container__title">Tu carrito está vacío</h2>
                <hr />
                <h3 className='goToShopMessage'>
                    Agrega productos al carrito para verlos aquí 
                </h3>
                
                <Link to="/tienda" className='primaryButton btn-goToShop'>Visitar la tienda</Link>
        </div>
    )
}