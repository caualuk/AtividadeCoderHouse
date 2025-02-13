
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
    </div>
  );
}

export default ItemListContainer;
