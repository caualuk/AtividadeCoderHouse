
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

    </div>
  );
}

export default Item;

