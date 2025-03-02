import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Item/Item'; // Importando o componente ProductCard

function Home() {
  // Exemplo de lista de produtos
  const products = [
    { id: 1, name: 'Camisa Nike', price: '199,90', image: 'link_da_imagem_do_produto.jpg' },
    { id: 2, name: 'Camisa Adidas', price: '179,90', image: 'link_da_imagem_do_produto.jpg' },
    { id: 3, name: 'Camisa Puma', price: '159,90', image: 'link_da_imagem_do_produto.jpg' },
    // Outros produtos
  ];

  return (
    <div>
      <h1>Bem-vindo à nossa Loja de Camisas</h1>

      <section>
        <h2>Categorias</h2>
        <div className="categories">
          <Link to="/nike">Nike</Link>
          <Link to="/adidas">Adidas</Link>
          <Link to="/puma">Puma</Link>
        </div>
      </section>

      <section>
        <h2>Produtos em Destaque</h2>
        <div className="highlighted-products">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
