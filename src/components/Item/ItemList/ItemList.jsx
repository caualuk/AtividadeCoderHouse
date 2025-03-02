
import Item from "../Item.jsx";
import "./ItemList.css";

function ItemList({ items }) {
  return (
    <div className="item-list-container">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
