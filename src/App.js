import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemCount from './components/counter/ItemCount';
import ItemListContainer from './components/Products/listContainer/ItemListContainer';
import ItemDetailContainer from './components/Products/itemDetailContainer/ItemDetailContainer';

function App() {
  return (
  
    <div className="App">
      <NavBar/>
      <div className='container'>
      <ItemListContainer/>
      </div>

      <ItemDetailContainer/>
      <ItemCount stock={20} initial={1}/>
  
      <header className="App-header">
      </header>
    </div>
    
  );
}

export default App;
