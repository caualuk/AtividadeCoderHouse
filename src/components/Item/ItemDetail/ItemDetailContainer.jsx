<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`/api/items/${id}`);
      const data = await response.json();
      setItem(data);
    };

    fetchItem();
  }, [id]);

  return (
    <div className="item-detail">
      {item ? (
        <>
          <h1>{item.name}</h1>
          <img src={item.image} alt={item.name} />
          <p>{item.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
=======
import React from "react";
import ItemDetail from "./ItemDetail"; 

const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "Samsung Galaxy S20 FE",
        description: "Smartphone com 6GB RAM, 128GB de armazenamento, cor Cloud Navy.",
        price: 76999,
        mainImage: "https://http2.mlstatic.com/D_NQ_NP_2X_976503-MLA44281674509_122020-F.webp",
      });
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = React.useState(null);

  React.useEffect(() => {
    getItem().then((data) => {
      setItem(data);
    });
  }, []);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Carregando detalhes do produto...</p>}
>>>>>>> 925455a (update commit)
    </div>
  );
}

export default ItemDetailContainer;
