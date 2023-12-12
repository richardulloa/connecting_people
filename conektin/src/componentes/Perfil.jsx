import React, { useContext } from "react";
import Contexto from "../context/Contexto";
import "./css/Perfil.css";
import Navegador from "./Navegador";
import Intereses from "./Intereses";
import VisualizarEvento from './Eventos/VisualizarEvento'
import VisualizarFamilia from "./Familias/VisualizarFamilia";

const Perfil = () => {

  const { usuario } = useContext(Contexto)

  return (
    <div className="Perfil">
      <Navegador />
      <div className="contenido-perfil">
        <div className="barraPerfil">
          <h1>Tus Datos</h1>
          <div className="imagen-perfil">
            <img src="https://www.optimaley.com/wp-content/uploads/2014/09/foto-perfil-generica.jpg" alt="imagen-perfil" />
          </div>
          {
            usuario &&
            <div className="datos-perfil">
              <p>{usuario.nombreUsuario}</p>
              <p>{usuario.email}</p>
              <p>{usuario.cp}</p>
              <p>{usuario.fechaNacimiento}</p>
            </div>
          }
          <h1>Tus Intereses</h1>
          <div className="contenido-principal">
            <div className="intereses-perfil">
              <Intereses />
              <Intereses />
              <Intereses />
              <Intereses />
            </div>
          </div>
        </div>
        <div className="eventos-perfil">
          <h1>Tus Eventos</h1>
          <div className="eventos">
          </div>
          <h1>Tus Familias</h1>
          <div className="familias">
          </div>
        </div>
      </div>

    </div >
  );
};

export default Perfil;