import React from 'react';
import styled from 'styled-components';

// Estilos com Styled Components
const AboutContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: white;
  margin: 2rem auto;
  padding: 2rem;
  width: 80%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  h2 {
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <h2>Sobre a GymBro</h2>
      <p>
        Bem-vindo à <strong>GymBro</strong>, o seu destino definitivo para suplementos e equipamentos de alta qualidade. 
        Nosso objetivo é ajudar você a alcançar seus objetivos fitness, fornecendo os melhores produtos do mercado.
      </p>
      <p>
        Fundada em 2024, nossa loja nasceu da paixão por saúde e bem-estar. Trabalhamos com as melhores marcas e garantimos 
        produtos 100% originais e de alta qualidade. Seja você um atleta profissional ou alguém que está começando sua jornada 
        fitness, temos tudo o que você precisa.
      </p>
      <p>
        Nossa equipe é composta por especialistas em nutrição e treinamento físico, prontos para oferecer orientações e 
        recomendações personalizadas. Visite nossa loja ou entre em contato conosco para saber mais!
      </p>
    </AboutContainer>
  );
};

export default About;