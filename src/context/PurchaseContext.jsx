import { createContext, useState } from "react";

export const PurchaseContext = createContext([]);

export const PurchaseProvider = ({ children }) => {
    const [purchases, setPurchases] = useState([]);

    // Função para adicionar uma compra
    const addPurchase = (purchase) => {
        setPurchases((prevPurchases) => [...prevPurchases, purchase]);
    };

    // Função para limpar todas as compras (após finalização)
    const clearPurchases = () => {
        setPurchases([]);
    };

    return (
        <PurchaseContext.Provider value={{ purchases, addPurchase, clearPurchases }}>
            {children}
        </PurchaseContext.Provider>
    );
};
