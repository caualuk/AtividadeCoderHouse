import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart-icon">
        <p className="cart"><FaShoppingCart /></p>
    </div>
  );
};

export default CartWidget;