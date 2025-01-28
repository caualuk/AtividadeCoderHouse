import React, { useState } from "react";
import './CounterButton.css';

function CounterButton() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  function isFreteGratis(setCount){
    if(setCount >= 5){
      return(
        <h1>Parabéns, você ganhou frete grátis!</h1>
      )
    }
  }

  return (
    <div className="counter">
      <h1>Itens: {count}</h1>
      <button onClick={increment}>Adicionar produto</button>
      {isFreteGratis(count)}
    </div>
  );
}

export default CounterButton;
