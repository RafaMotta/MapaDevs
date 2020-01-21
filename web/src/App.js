import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

//Componente: função(bloco) que retorna algum conteudo html, css, javascript no qual nao interfere no restante da aplicação
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade(ESTUDAR CONCEITO! IMPORTANTE))
//Propriedade: Informação que o componente PAI passa para o componente FILHO


function App() {//Componente (PRIMEIRA LETRA SEMPRE MAIUSCULA)
  const [ latitude, setLatitude ] = useState('');
  const [ longitude, setLongitude ] = useState('');
  const [ github_username, setGithubUsername ] = useState('');
  const [ techs, setTechs ] = useState('');


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  },[]);

  async function handleAddDev(e){
    e.preventDefault();
    


  }
 
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
          <form onSubmit={handleAddDev}>
            <div className="input-block">
              <label htmlFor="github_username">Usuário do Github</label>
              <input 
                name="github_username" 
                id="github_username" 
                required
                value={github_username}
                onChange={e => setGithubUsername(e.target.value)}
              />
            </div>
            
            <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input 
                name="techs" 
                id="techs" 
                required
                value={techs}
                onChange={e => setTechs(e.target.value)}
              />
            </div>

            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input 
                  type="number" 
                  name="latitude" 
                  id="latitude"
                  value={latitude} 
                  required
                  onChange={e => setLatitude(e.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input 
                  type="number" 
                  name="longitude" 
                  id="longitude" 
                  value={longitude} 
                  required
                  onChange={e => setLongitude(e.target.value)}
                />
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
