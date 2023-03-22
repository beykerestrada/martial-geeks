import "./components/Button/PrimaryButton.scss"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

/* import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
 */

function App() {
  return (
    <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:productCategory' element={<ItemListContainer/>}/>
        <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={
        <div>
          <h2>Error 404</h2>
          <h3>Página no encontrada</h3>
          <br/>
          <br/>
          <br/>
          <Link className="primaryButton" to={"/"}>Volver al home</Link>
        </div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
