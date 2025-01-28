import React from 'react';

function ItemDetail({ item }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img 
        src={item.mainImage} 
        alt={item.title} 
        style={{ width: '300px', height: 'auto', marginBottom: '20px' }} 
      />
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        Preço: R$ {item.price.toLocaleString('pt-BR')}
      </p>
    </div>
  );
}

export default ItemDetail;
