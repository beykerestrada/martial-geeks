import "./components/Button/PrimaryButton.scss"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { Account } from "./components/Account/Account";
import Hero from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";

function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/tienda' element={<ItemListContainer />} />
            <Route path='/' element={<Hero />} />
            <Route path='/category/:productCategory' element={<ItemListContainer />} />
            <Route path='/item/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            } />
            <Route path='/checkout' element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            } />
            <Route path='/cuenta' element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            } />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
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
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
