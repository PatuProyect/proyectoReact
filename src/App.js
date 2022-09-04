import './App.css';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css" ;
import Home from './view/Home/Home';
import Contact from './view/Contact/Contact';
import About from './view/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './view/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <header className="App-header">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/About' element={<About />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
          </Routes>
      </header>
      </Router>
    </div>
  );
}

export default App;

