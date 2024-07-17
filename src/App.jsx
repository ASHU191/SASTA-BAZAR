import React from 'react'
import Home from './components/pages/Home'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Product from './components/products/Product';
import Blog from './components/pages/Blog';
import Shop from './components/pages/Shop'

const App = () => {

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home />} />;
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/product' element={<Product />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
      
      <Navbar />
      <Footer />
    </>


  )
}
export default App;