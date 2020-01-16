import React from 'react';

import './global.css';
import './App.css'
//Componente: função(bloco) que retorna algum conteudo html, css, javascript no qual nao interfere no restante da aplicação
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade(ESTUDAR CONCEITO! IMPORTANTE))
//Propriedade: Informação que o componente PAI passa para o componente FILHO


function App() {//Componente (PRIMEIRA LETRA SEMPRE MAIUSCULA)
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
          <form>
            <div className="input-block">
              <label htmlFor="github_username">Usuário do Github</label>
              <input name="github_username" id="github_username" required/>
            </div>
            
            <div className="input-block"></div>
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" id="techs" required/>
            </div>

            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
