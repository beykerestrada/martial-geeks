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
            {/* <Hero/> */}
            <ItemListContainer/>
          </div>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
