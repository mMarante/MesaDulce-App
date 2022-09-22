import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/Products/listContainer/ItemListContainer';
import ItemDetailContainer from './components/Products/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './Pages/Contact/ContactPage';
import Nosotros from './Pages/Nosotros/nosotros';
import CartContainer from './components/cart/CartContainer';
import CartProvider from './context/CartContext'

function App() {
  return (
    <CartProvider>
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
          <Route path='/Cart' element={<CartContainer/>}/>
          </Routes>
          <header className="App-header">
          </header>
          </div>
        </div>
      </BrowserRouter>
      </CartProvider>
    
  );
}

export default App;
