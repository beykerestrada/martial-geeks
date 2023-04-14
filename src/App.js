import "./components/Button/PrimaryButton.scss"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";

function App() {
 
  return (
   
    <CartProvider>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:productCategory' element={<ItemListContainer />} />
          <Route path='/item/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          
          <Route path='*' element={
            <div>
              <h2>Error 404</h2>
              <h3>Página no encontrada</h3>
              <br />
              <br />
              <br />
              <Link className="primaryButton" to={"/"}>Volver al home</Link>
            </div>}
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
