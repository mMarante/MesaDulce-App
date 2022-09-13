import './App.css';
import NavBar from './components/navBar/NavBar';

import ItemListContainer from './components/Products/listContainer/ItemListContainer';
import ItemDetailContainer from './components/Products/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './components/Contact/ContactPage';
import Nosotros from './components/Nosotros/nosotros';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div>
      <NavBar/>
      
      <Routes>
      <Route path='/Productos' element={<ItemListContainer/>}/>  
      <Route path='/Productos/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/Nosotros' element={<Nosotros/>}/>
      <Route path='/Contacto' element={<ContactPage/>}/>
      <Route path='/Item/:productId' element={<ItemDetailContainer/>}/>
      </Routes>

      
  
      <header className="App-header">
      </header>
      </div>
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
