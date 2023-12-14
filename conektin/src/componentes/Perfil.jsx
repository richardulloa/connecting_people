import React, { useContext } from "react"
import Contexto from "../context/Contexto"
import "./css/Perfil.css"
import Navegador from "./Navegador"
import Intereses from "./Intereses"
import VisualizarEventoPerfil from './Eventos/VisualizarEventoPerfil'
import VisualizarFamiliaPerfil from "./Familias/VisualizarFamiliaPerfil"
import { useState, useEffect } from "react"
import { useParams } from "react-router"


const Perfil = () => {

  const { usuario } = useContext(Contexto)
  const { id } = useParams()

  const [eventosUsuario, setEventosUsuario] = useState([])
  const [familiasUsuario, setFamiliasUsuario] = useState([])

  useEffect(() => {

    const API_EVENTOS_USUARIO = `http://localhost:3300/api/eventosusuario/${id}`

    const peticionEventos = fetch(API_EVENTOS_USUARIO)
    peticionEventos
      .then((resp) => {
        return resp.json()
      })
      .then((eventos) => {
        setEventosUsuario(eventos)
      })
      .catch((error) => window.alert(error))

    const API_FAMILIAS_USUARIO = `http://localhost:3300/api/familiasusuario/${id}`

    const peticionFamilias = fetch(API_FAMILIAS_USUARIO)
    peticionFamilias
      .then((resp) => {
        return resp.json()
      })
      .then((familias) => {
        setFamiliasUsuario(familias)
      })
      .catch((error) => window.alert(error))

  }, [id])

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
          <section className="tus-eventos-perfil">
            <h1>Tus Eventos</h1>
            <div className="eventos">
              {
                eventosUsuario.length
                  ? eventosUsuario.map((evento => <VisualizarEventoPerfil key={evento.idevento} evento={evento} />))
                  : <h2>No tienes eventos</h2>
              }
            </div>
          </section>

          <section className="tus-familias-perfil">
            <h1>Tus Familias</h1>
            <div className="familias">
              {
                familiasUsuario.length
                  ? familiasUsuario.map((familia => <VisualizarFamiliaPerfil key={familia.idfamilia} familia={familia} />))
                  : <h2>No estas en ninguna familia</h2>
              }
            </div>
          </section>
        </div>
      </div>
    </div >
  );
};


export default Perfil;
