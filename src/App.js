import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Contacts from './Contacts';

function App() {
  return (
    <Router>
      <nav>
        <Link to='/' className='link-style'>Home</Link>
        <Link to='/about' className='link-style'>About</Link>
        <Link to='/shop' className='link-style'>Shop</Link>
        <Link to='/contacts' className='link-style'>Contacts</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>
    </Router>
  );
}

export default App;
