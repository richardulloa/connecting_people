import React, { useContext } from "react"
import Contexto from "../context/Contexto"
import "./css/Perfil.css"
import Navegador from "./Navegador"
import Intereses from "./Intereses"
import VisualizarEvento from './Eventos/VisualizarEvento'
import VisualizarFamilia from "./Familias/VisualizarFamilia"
import { useState, useEffect } from "react"


const Perfil = () => { 

  const { usuario } = useContext(Contexto)

  const [eventosUsuario, setEventosUsuario] = useState([])

  useEffect(() => {
    
    if(usuario){
      const API_EVENTOS_USUARIO = `http://localhost:3300/api/eventosusuario/${usuario.idusuario}`

      const peticion = fetch(API_EVENTOS_USUARIO)
      peticion
        .then((resp) => {
          return resp.json() 
        })
        .then((eventos) => {
          setEventosUsuario(eventos)
        })
        .catch((error) => window.alert(error))
    }
  
  }, [])

  console.log(eventosUsuario)

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
          {
            eventosUsuario.map((evento => <VisualizarEvento evento={evento}/>)
            )
          }
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