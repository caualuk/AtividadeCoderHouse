import { useParams } from "react-router-dom";
import mockData from "../../mockData.js"; 
import { useContext } from "react";
import { PurchaseContext } from "../../context/PurchaseContext";

function Produto() {
    const { produtoID } = useParams(); // Captura o ID da URL
    const produto = mockData.find(item => item.id === Number(produtoID)); // Busca no mockData
    const { addPurchase, clearPurchases } = useContext(PurchaseContext);

    if (!produto) {
        return <h2>Produto não encontrado</h2>;
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
        <div>
            <h2>{produto.title}</h2>
            <p>Preço: R${produto.price}</p>
            <img src={produto.pictureUrl} alt={produto.title} style={{ width: "200px", height: "200px", objectFit: "cover" }} />
            <button onClick={finalizarCompra}>Finalizar Compra</button>
        </div>
    );
}

export default Produto;
