import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/Counter/ItemCount';
import ItemListContainer from './components/Products/ListContainer/ItemListContainer';

function App() {
  return (
  
    <div className="App">
      <NavBar/>
      <div className='container'>
      <ItemListContainer/>
      </div>
      <ItemCount stock={20} initial={1}/>
  
      <header className="App-header">
      </header>
    </div>
    
  );
}

export default App;
