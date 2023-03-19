import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Navbar } from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path='/' element={
          <div>
            {/* Se deja comentado el hero por esta vez para ir trabajando poco a poco en el, Por ahora me interesa mostrar los componentes necesarios para el desafio */}
            {/* <Hero/> */} 
            <ItemListContainer/>
          </div>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
