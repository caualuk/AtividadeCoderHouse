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
    </div>
  );
}

export default ProductCard;
