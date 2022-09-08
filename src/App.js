import './App.css';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css" ;
import Home from './view/Home/Home';
import Contact from './view/Contact/Contact';
import About from './view/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './view/ItemDetailContainer/ItemDetailContainer';
import Category from './components/Category/NavCategory';
import Clothes from './view/Clothes/Clothes';
import Others from './view/Others/Others';
import Electronics from './view/Electronics/Electronics';
import Shoes from './view/Shoes/Shoes';
import Furniture from './view/Furniture/Furniture';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Category />
      <header className="App-header">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/About' element={<About />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
            <Route path='/clothes' element={<Clothes />} />
            <Route path='/electronics' element={<Electronics />} />
            <Route path='/shoes' element={<Shoes />} />
            <Route path='/others' element={<Others />} />
            <Route path='/furniture' element={<Furniture />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
      </header>
      </Router>
    </div>
  );
}

export default App;

