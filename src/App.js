import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Navbar } from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ItemListContainer greeting={"Hola mundo!"}/>
    </div>
  );
}

export default App;
