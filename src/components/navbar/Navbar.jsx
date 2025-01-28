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
}

export default Navbar;
