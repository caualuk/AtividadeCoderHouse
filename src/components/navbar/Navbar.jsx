<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/nike">Nike</Link>
      <Link to="/adidas">Adidas</Link>
      <Link to="/puma">Puma</Link>
    </nav>
  );
=======
import React from "react";
import CartWidget from "./CartWidget/CartWidget";
import "./Navbar.css";
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar">
            {/* Logotipo */}
            <div className="logo-name">
                <h3>Gym<span>bro</span></h3>
            </div>

            {/* Links de navegação */}
            <div className="options">
                <ul>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/produtos`}>Produtos</Link></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </div>

            {/* Ícone do carrinho */}
            <div className="cart">
                <CartWidget />
            </div>
        </nav>
    );
>>>>>>> 925455a (update commit)
}

export default Navbar;
