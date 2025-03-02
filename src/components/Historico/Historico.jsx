import { useContext } from "react";
import { PurchaseContext } from "../../context/PurchaseContext.jsx";

const Historico = () => {
    const { purchases, clearPurchases } = useContext(PurchaseContext);

    return (
        <div>
            <h1>Histórico de Compras</h1>
            {purchases.length === 0 ? (
                <p>Nenhuma compra realizada ainda.</p>
            ) : (
                <ul>
                    {purchases.map((purchase, index) => (
                        <li key={index}>
                            {purchase.nome} - R${purchase.preco} - {new Date(purchase.data).toLocaleDateString()}
                        </li>
                    ))}
                </ul>
            )}
            {purchases.length > 0 && (
                <button onClick={clearPurchases}>Limpar Histórico</button>
            )}
        </div>
    );
};

export default Historico;
