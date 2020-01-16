import React, { useState } from 'react';
import Header from './Header';
//Componente: função(bloco) que retorna algum conteudo html, css, javascript no qual nao interfere no restante da aplicação
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade(ESTUDAR CONCEITO! IMPORTANTE))
//Propriedade: Informação que o componente PAI passa para o componente FILHO


function App() {//Componente (PRIMEIRA LETRA SEMPRE MAIUSCULA)
  let [counter, setCounter] = useState(0);
  function incrementCounter(){
    setCounter(counter + 1);
  }
  return (
    //tag abaixo chama fragment que serve para nao atrapalhar o style do resto da aplicação
    <> 
      <h1>Contador {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
