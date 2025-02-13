<<<<<<< HEAD
import React, { useState } from 'react';

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0); // Estado para a quantidade

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Preço: R$ {product.price}</p>

      {/* Contador */}
      <div className="quantity-control">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>

      <a href={`/product/${product.id}`}>Ver Produto</a>
=======
import React from "react";
import "./Item.css"; 
import { useNavigate } from "react-router-dom";

function Item({ item }) {
  const navigate = useNavigate();

  return (
    <div className="item-container">
      <h3>Produtos</h3>
      <img
        className="item-image"
        src={item.pictureUrl}
        alt={item.title}
      />
      <h4 className="item-title">{item.title}</h4>
      <p className="item-price">Preço: R$ {item.price}</p>
      <button className="item-button" onClick={() => navigate(`/produto/${item.id}`)}>
        Veja detalhes do produto
      </button>
      <button className="item-button" onClick={() => alert(`Produto adicionado ao carrinho`)}>
        Adicionar ao carrinho
      </button>
      <p className="item-stock">Em estoque: {item.stock}</p>
>>>>>>> 925455a (update commit)
    </div>
  );
}

<<<<<<< HEAD
export default ProductCard;
=======
export default Item;
>>>>>>> 925455a (update commit)
