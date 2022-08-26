import './App.css';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css" ;
import MediaCard from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
          <MediaCard />
      </header>
    </div>
  );
}

export default App;

