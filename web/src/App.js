import React, { useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

//Componente: função(bloco) que retorna algum conteudo html, css, javascript no qual nao interfere no restante da aplicação
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade(ESTUDAR CONCEITO! IMPORTANTE))
//Propriedade: Informação que o componente PAI passa para o componente FILHO


function App() {//Componente (PRIMEIRA LETRA SEMPRE MAIUSCULA)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition();
  },[]);
 
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
          <form>
            <div className="input-block">
              <label htmlFor="github_username">Usuário do Github</label>
              <input name="github_username" id="github_username" required/>
            </div>
            
            <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" id="techs" required/>
            </div>

            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" id="latitude" required/>
              </div>

              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required/>
              </div>
            </div>
            
            <button type="submit">Salvar</button>
          </form>
      </aside>
      <main>
        <ul>
        <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/34509225?s=460&v=4" alt="Rafael Motta" />
              <div className="user-info">
                <strong>Rafael Motta</strong>
                <span>PHP, javascript, NODEJS</span>
              </div>
            </header>
            <p>Desenvolvedor PHP</p>
            <a href="https://github.com/RafaMotta">Acessar Perfil Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/34509225?s=460&v=4" alt="Rafael Motta" />
              <div className="user-info">
                <strong>Rafael Motta</strong>
                <span>PHP, javascript, NODEJS</span>
              </div>
            </header>
            <p>Desenvolvedor PHP</p>
            <a href="https://github.com/RafaMotta">Acessar Perfil Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/34509225?s=460&v=4" alt="Rafael Motta" />
              <div className="user-info">
                <strong>Rafael Motta</strong>
                <span>PHP, javascript, NODEJS</span>
              </div>
            </header>
            <p>Desenvolvedor PHP</p>
            <a href="https://github.com/RafaMotta">Acessar Perfil Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/34509225?s=460&v=4" alt="Rafael Motta" />
              <div className="user-info">
                <strong>Rafael Motta</strong>
                <span>PHP, javascript, NODEJS</span>
              </div>
            </header>
            <p>Desenvolvedor PHP</p>
            <a href="https://github.com/RafaMotta">Acessar Perfil Github</a>
          </li>
        </ul>

      </main>
    </div>
  );
}

export default App;
