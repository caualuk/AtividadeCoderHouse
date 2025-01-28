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
    </div>
  );
}

export default ItemListContainer;
