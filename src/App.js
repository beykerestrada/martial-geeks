import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path='/' element={
          <div>
            {/* Eliminé el hero por esta vez para ir trabajando poco a poco en el, Por ahora me interesa mostrar los componentes necesarios para el desafio */}
            <ItemListContainer/>
          </div>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
