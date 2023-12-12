import React from "react";
import "./css/Perfil.css";
import Navegador from "./Navegador";
import Intereses from "./Intereses";
import VisualizarEvento from './Eventos/VisualizarEvento'
import VisualizarFamilia from "./Familias/VisualizarFamilia";

const Perfil = () => {
  return (
    <div className="Perfil">
      <Navegador />
      <div className="contenido-perfil">
        <div className="barraPerfil">
          <h1>Tus Datos</h1>
          <div className="imagen-perfil">
            <img
              src="https://www.optimaley.com/wp-content/uploads/2014/09/foto-perfil-generica.jpg"
              alt="imagen-perfil"
            />
          </div>
          <div className="datos-perfil">
            <p>NombreApellidos</p>
            <p>Correo</p>
            <p>CodigoPostal</p>
            <p>FecchaNacimiento</p>
          </div>
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
            <VisualizarEvento/>
            <VisualizarEvento/>
          </div>
          <button>Ver mas</button>
          <h1>Tus Familias</h1>
          <div className="familias">
          <VisualizarFamilia></VisualizarFamilia>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Perfil;