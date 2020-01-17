import React, { useEffect } from "react";
import "./global.css";
import "./app.css";
import "./sidebar.css";
import "./main.css";

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      err => {
        console.log(err);
      }
    );
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="username_github">Usuário do Github</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latidude" id="latidude" required />
            </div>
            <div className="input-block">
              <label htmlFor="logitude">Longitude</label>
              <input name="logitude" id="logitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/34255207?v=4"
                alt="name user"
              />
              <div className="user-info">
                <strong>Erislandio soares</strong>
                <span>ReactJs, React native, Node.js</span>
              </div>
            </header>
            <p>Olá essa é minha Bio</p>
            <a href="https://github.com/Erislandio/">Acessar perfil github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/34255207?v=4"
                alt="name user"
              />
              <div className="user-info">
                <strong>Erislandio soares</strong>
                <span>ReactJs, React native, Node.js</span>
              </div>
            </header>
            <p>Olá essa é minha Bio</p>
            <a href="https://github.com/Erislandio/">Acessar perfil github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/34255207?v=4"
                alt="name user"
              />
              <div className="user-info">
                <strong>Erislandio soares</strong>
                <span>ReactJs, React native, Node.js</span>
              </div>
            </header>
            <p>Olá essa é minha Bio</p>
            <a href="https://github.com/Erislandio/">Acessar perfil github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/34255207?v=4"
                alt="name user"
              />
              <div className="user-info">
                <strong>Erislandio soares</strong>
                <span>ReactJs, React native, Node.js</span>
              </div>
            </header>
            <p>Olá essa é minha Bio</p>
            <a href="https://github.com/Erislandio/">Acessar perfil github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
