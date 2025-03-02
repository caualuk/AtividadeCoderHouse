
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
                    <li><a href={`/about`}>Sobre</a></li>
                    <li><a href={`/contato`}>Contato</a></li>
                </ul>
            </div>

            {/* Ícone do carrinho */}
            <div className="cart">
                <CartWidget />
            </div>
        </nav>
    );
}

export default Navbar;
