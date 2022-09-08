import './App.css';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css" ;
import Home from './view/Home/Home';
import Contact from './view/Contact/Contact';
import About from './view/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './view/ItemDetailContainer/ItemDetailContainer';
import Category from './components/Category/NavCategory';
import Cart from './view/Cart/Cart';
import CategoryList from './components/Category/CategoryList';

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
            <Route path='/category/:categoryid' element={<CategoryList />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
      </header>
      </Router>
    </div>
  );
}

export default App;

