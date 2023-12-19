import React from "react";
import { Link } from "react-router-dom";
import "./css/InicioSinLogin.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import CelebrationIcon from '@mui/icons-material/Celebration';
import FestivalIcon from '@mui/icons-material/Festival';

const InicioSinLogin = () => {
  
  return (
    <div className="no-login">
      <header className="cabecera">
        <Link><img className="imglogo" src="../logo512.png" alt="Logo" /></Link>
        <div className="botones">
          <Link to={"/login"} className="btn1">Iniciar Sesion</Link>
          <Link to={"/alta"} className="btn2">Registrate</Link>
        </div>
      </header>

      <main className="contenido-sin-inicio">
        <section className="contenido1">
          <aside className="info-contenido1">
            <h1>Bienvenido a Conektin</h1>
            <p>
              Conektin es más que una plataforma, es el vínculo que une
              corazones y crea recuerdos inolvidables en la vibrante ciudad de Barcelona.
              Nuestro lema, "Conectando familias y gustos en Barcelona",
              refleja nuestra misión de fortalecer lazos familiares y fomentar
              la comunidad a través de experiencias compartidas.
              <br />
            </p>
          </aside>

          <img
            className="imgcont"
            src="../img/InicioSin/imagen2.png"
            alt="imagen principal"
          />
        </section>

        <section className="contenido2">
          <h2>Conectando a personas del mundo en Barcelona</h2>
          <div className="objetivos">
            <article>
              <Diversity1Icon sx={{fontSize: 50}} />
              <h3>Familiares extranjeros</h3>
              <p>
                En Conektin, no estás solo. Conéctate con otras
                familias migrantes que entienden las experiencias
                únicas de vivir lejos de casa. Forjemos juntos una
                red de apoyo que haga que Barcelona se sienta como un hogar.
              </p>
            </article>
            <article>
              <FamilyRestroomIcon sx={{fontSize: 50}} />
              <h3>Únete a una familia</h3>
              <p>
                En Conektin, te invitamos a formar parte de algo más grande:
                una familia acogedora que trasciende las barreras geográficas.
                Únete a una red de familias dispuestas a compartir risas,
                experiencias y apoyo mutuo.
              </p>
            </article>
            <article>
              <FestivalIcon sx={{fontSize: 50}} />
              <h3>Eventos que unen</h3>
              <p>
                Organiza y participa en eventos diseñados para compartir
                y celebrar las ricas tradiciones de diversas culturas.
                Desde reuniones informales hasta festivales temáticos,
                en Conektin creamos oportunidades para crear recuerdos duraderos.
              </p>
            </article>
            <article>
              <CelebrationIcon sx={{fontSize: 50}} />
              <h3>Tradiciones y cultura</h3>
              <p>
                Ofrecemos recursos útiles para facilitar la adaptación a la vida en Barcelona,
                como la cultura de la ciudad y de sus tradiciones. Conektin es tu guía mientras
                te embarcas en esta nueva aventura.
              </p>
            </article>
          </div>
        </section>

        <img className="carlitos" src="../img/InicioSin/carlitos.png" alt="Carlitos" />
      </main>

      <footer className="pie">
        <div className="pie-flex">
          <div className="enlacesimg">
            <h3>Siguenos</h3>
            <FacebookIcon className="fi" fontSize="large" />
            <TwitterIcon className="ti" fontSize="large" />
            <InstagramIcon className="ii" fontSize="large" />
          </div>
          <div className="enlacespag">
            <Link to={"/login"}>Iniciar Sesión</Link>
            <Link to={"/alta"}>Registrate</Link>
            <Link to={"/ayuda"}>Ayuda</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InicioSinLogin;
