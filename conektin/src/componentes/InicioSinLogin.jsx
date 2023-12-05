import React from "react";
import { Link } from "react-router-dom";
import "./css/InicioSinLogin.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const InicioSinLogin = () => {
  return (
    <div className="Nologin">
      <header className="cabecera">
          <img
            className="imglogo"
            src="https://th.bing.com/th/id/OIP.BSdNpNqWXmy1WQ0o0qtRCwHaFy?rs=1&pid=ImgDetMain"
            alt="Logo"
          />
        <div>
          <Link to={"/main"}>BOTON DE PRUEBA PARA CAMBIAR DE PAGINAS</Link>
        </div>

        <div className="botones">
          <Link className="btn1">Iniciar Sesion</Link>
          <Link to={"/alta"} className="btn2">Registrate</Link>
        </div>
      </header>

      <main className="contenido">
        <section className="contenido1">
          <h2>Titulo Descripción</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            odit distinctio iusto veniam voluptatibus possimus quis officia
            repellendus quaerat! Officiis ipsa dolore necessitatibus commodi
            eligendi adipisci? Nostrum earum repellendus quia?
          </p>
          <img
            className="imgcont"
            src="https://i.kinja-img.com/image/upload/c_fit,q_60,w_1315/290c1a587fb5e6a9ac97ee526ff8d6c7.jpg"
            alt="imagen principal"
          />
        </section>
        <section className="contenido2">
          <h2>Titulo Lema</h2>
          <div className="objetivos">
            <article>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                laborum consequuntur cum facilis officiis! Excepturi molestias,
                sit perferendis facilis, perspiciatis necessitatibus debitis
                alias modi distinctio voluptates sequi at illum? Aliquid.
              </p>
            </article>
            <article>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                laborum consequuntur cum facilis officiis! Excepturi molestias,
                sit perferendis facilis, perspiciatis necessitatibus debitis
                alias modi distinctio voluptates sequi at illum? Aliquid.
              </p>
            </article>
            <article>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                laborum consequuntur cum facilis officiis! Excepturi molestias,
                sit perferendis facilis, perspiciatis necessitatibus debitis
                alias modi distinctio voluptates sequi at illum? Aliquid.
              </p>
            </article>
            <article>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                laborum consequuntur cum facilis officiis! Excepturi molestias,
                sit perferendis facilis, perspiciatis necessitatibus debitis
                alias modi distinctio voluptates sequi at illum? Aliquid.
              </p>
            </article>
            <article>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                laborum consequuntur cum facilis officiis! Excepturi molestias,
                sit perferendis facilis, perspiciatis necessitatibus debitis
                alias modi distinctio voluptates sequi at illum? Aliquid.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="pie">
        <h3>Siguenos</h3>
        <div className="enlacesimg">
          <FacebookIcon className="fi" fontSize="large" />
          <TwitterIcon className="ti" fontSize="large" />
          <InstagramIcon className="ii" fontSize="large" />
        </div>
        <div className="enlacespag">
          <a>Iniciar Sesión</a>
          <a>Registrate</a>
          <a>Ayuda</a>
        </div>
      </footer>
    </div>
  );
};

export default InicioSinLogin;
