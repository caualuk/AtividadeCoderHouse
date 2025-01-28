import React from "react";
import Item from "../Item";
import './ItemList.css'

function ItemList({ items }) {

  const mockItems = [
    {
      id: 1,
      title: "Coleção RBD",
      price: 50,
      pictureUrl: "https://via.placeholder.com/100x150",
      stock: 17,
    },
    {
      id: 2,
      title: "Álbum Clássico",
      price: 40,
      pictureUrl: "https://via.placeholder.com/100x150",
      stock: 10,
    },
  ];
  
  <ItemList items={mockItems} />
  
  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
