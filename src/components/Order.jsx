import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

function Order() {
  const [products, setProducts] = useState([]);
  const [buyer, setBuyer] = useState({ name: '', phone: '', email: '' });
  const [orderId, setOrderId] = useState(null);
  const db = getFirestore();

  // Busca os produtos do Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      const itemsCollection = collection(db, "items");
      const snapshot = await getDocs(itemsCollection);
      const productsArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsArray);
    };

    fetchProducts();
  }, [db]);

  // Função para criar uma ordem
  const createOrder = async () => {
    if (!buyer.name || !buyer.phone || !buyer.email) {
      alert("Preencha os dados do comprador!");
      return;
    }

    const order = {
      buyer,
      items: products.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price
      })),
      date: new Date().toISOString(),
      total: products.reduce((acc, item) => acc + item.price, 0)
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      alert(`Pedido criado com sucesso! ID: ${docRef.id}`);
    } catch (error) {
      console.error("Erro ao criar ordem:", error);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Finalizar Compra</h2>
      <input
        type="text"
        placeholder="Nome"
        value={buyer.name}
        onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Telefone"
        value={buyer.phone}
        onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={buyer.email}
        onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
      />
      <button onClick={createOrder}>Finalizar Pedido</button>

      {orderId && <p>Pedido criado com ID: {orderId}</p>}
    </div>
  );
}

export default Order;