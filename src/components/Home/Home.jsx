import ItemList from "../Item/ItemList/ItemList";
import ItemListContainer from "../Item/ItemListContainer/ItemListContainer";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh; // Isso garante que o conteúdo ocupe toda a altura da viewport
    text-align: center; // Centraliza o texto dentro dos elementos

    .see-products{
        background-color: orange;
        padding: 20px;
        text-decoration: none;
        border-radius: 20px;
        color: black;
    }
`;

function Home(){
    return(
        <HomeContent>
            <h1>Olá! Seja bem-vindo(a) a GYMBRO</h1>
            <Link to="/produtos" className="see-products">
                Ver produtos
            </Link>
        </HomeContent>
    );
}

export default Home;