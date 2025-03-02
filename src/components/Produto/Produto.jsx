import { useParams } from "react-router-dom";
import mockData from "../../mockData.js"; 
import { useContext } from "react";
import { PurchaseContext } from "../../context/PurchaseContext";
import Order from "../Order.jsx";

function Produto() {
    const { produtoID } = useParams(); 
    const produto = mockData.find(item => item.id === Number(produtoID)); 
    const { addPurchase, clearPurchases } = useContext(PurchaseContext);

    if (!produto) {
        return <h2 className="produto-nao-encontrado">Produto não encontrado</h2>;
    }

    const finalizarCompra = () => {
        addPurchase({
            id: produto.id,
            nome: produto.title,
            preco: produto.price,
            quantidade: produto.stock, 
            data: new Date().toISOString()
        });
        alert("Compra finalizada! Histórico salvo");
        clearPurchases();
    };

    return (
        <>
            <div className="produto-container">
                <h2 className="produto-title">{produto.title}</h2>
                <p className="produto-preco">Preço: R${produto.price}</p>
                <img src={produto.pictureUrl} alt={produto.title} className="produto-imagem" />
            </div>

            <Order />
        </>
    );
}

export default Produto;