import { Link } from "react-router-dom"
import './StockAlertRouter.scss'

export const StockAlertRouter = () => {
    return (
        <div className="stockAlertRouter-container">
            <h4 className=' stockAlertH4'> Producto agotado</h4>
            <Link className=" primaryButton btn-goToShop" to="/">Volver a la tienda</Link>
        </div>
    )
}