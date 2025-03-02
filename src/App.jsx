import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Categoria from './components/Categoria/Categoria';
import Footer from './components/footer/footer.jsx';
import Produto from './components/Produto/Produto';
import Produtos from './components/Produtos/Produtos';
import About from './components/Sobre/sobre.jsx';
import PageContato from './components/Contato/PaginaContato.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { collection, getDocs, getFirestore, addDoc } from 'firebase/firestore';

function App() {
  

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/produtos' element={<Produtos />} />
          <Route path="/produto/:produtoID" element={<Produto />} />
          <Route exact path='/categoria/:categoriaID' element={<Categoria />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contato' element={<PageContato />} />
        </Routes>
        
      </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
