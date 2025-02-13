<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Mock async fetch by category
    const fetchItems = async () => {
      const response = await fetch(`/api/items?category=${categoryId || ''}`);
      const data = await response.json();
      setItems(data);
    };

    fetchItems();
  }, [categoryId]);

  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
=======
import React, { useEffect, useState } from "react";
import { fetchItems } from "../../../mockData.js";
import ItemList from "../ItemList/ItemList.jsx";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      const data = await fetchItems();
      setItems(data);
      setLoading(false);
    };

    getItems();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ItemList items={items} />
>>>>>>> 925455a (update commit)
    </div>
  );
}

<<<<<<< HEAD
export default ItemListContainer;
=======
export default ItemListContainer;
>>>>>>> 925455a (update commit)
