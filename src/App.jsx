import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nike from './components/categorys/nike';
import Adidas from './components/categorys/adidas';
import Puma from './components/categorys/nike';
import Home from './components/categorys/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nike" element={<Nike />} />
        <Route path="/adidas" element={<Adidas />} />
        <Route path="/puma" element={<Puma />} />
      </Routes>
    </Router>
  );
}

export default App;
