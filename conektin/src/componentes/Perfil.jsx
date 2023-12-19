import React, { useContext } from "react"
import Contexto from "../context/Contexto"
import "./css/Perfil.css"
import Navegador from "./Navegador"
import InteresesPerfil from "./Intereses/InteresesPerfil"
import VisualizarEventoPerfil from './Eventos/VisualizarEventoPerfil'
import VisualizarFamiliaPerfil from "./Familias/VisualizarFamiliaPerfil"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Footer from "./Footer"


const Perfil = () => {

  const { usuario } = useContext(Contexto)
  const { id } = useParams()

  const [eventosUsuario, setEventosUsuario] = useState([])
  const [familiasUsuario, setFamiliasUsuario] = useState([])
  const [abrirIntereses, setAbrirIntereses] = useState(false)
  const [intereses, setIntereses] = useState([])
  const [interesesUsuario, setInteresesUsuario] = useState([])

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

    const API_INTERESES = `http://localhost:3300/api/intereses`

    const peticionIntereses = fetch(API_INTERESES)
    peticionIntereses
      .then((resp) => {
        return resp.json()
      })
      .then((intereses) => {
        setIntereses(intereses)
      })
      .catch((error) => window.alert(error))


    const API_INTERESES_USUARIO = `http://localhost:3300/api/getinteresesusuario/${id}`

    const peticionInteresesUsuario = fetch(API_INTERESES_USUARIO)
    peticionInteresesUsuario
      .then((resp) => {
        return resp.json()
      })
      .then((interesesUsuario) => {
        setInteresesUsuario(interesesUsuario)
      })
      .catch((error) => window.alert(error))

  }, [id])

  useEffect(() => {
    const API_INTERESES_USUARIO = `http://localhost:3300/api/getinteresesusuario/${id}`

    const peticionInteresesUsuario = fetch(API_INTERESES_USUARIO)
    peticionInteresesUsuario
      .then((resp) => {
        return resp.json()
      })
      .then((interesesUsuario) => {
        setInteresesUsuario(interesesUsuario)
      })
      .catch((error) => window.alert(error))

  }, [abrirIntereses])

  let iniciales
  if (usuario) {
    iniciales = usuario.nombreUsuario
      .split(" ")
      .map(elem => elem[0])
      .join(" ")
  }

  return (
    <div className="Perfil">
      <Navegador />
      <div className="contenido-perfil">
        <div className="barraPerfil">
          <h1>Tus Datos</h1>
          <div className="imagen-perfil">
            <h2 className="iniciales-perfil">{iniciales}</h2>
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
          <h4 className="añadir-intereses" onClick={() => setAbrirIntereses(true)}><PlaylistAddIcon />Añadir intereses</h4>

          <Modal
            open={abrirIntereses}
            onClose={() => setAbrirIntereses(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="box-modal-perfil">
              {
                usuario &&
                intereses.map(interes => {
                  return (
                    <InteresesPerfil key={interes.idinteres} usuario={usuario} interes={interes} />
                  )
                })
              }
            </Box>
          </Modal>
          <div className="contenido-principal">
            <div className="intereses-perfil">
              {
                interesesUsuario.map(interesUsuario => {
                  return (
                    <InteresesPerfil key={interesUsuario.idinteres} usuario={usuario} interes={interesUsuario} />
                  )
                })
              }
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
      <div className="footer">
        <Footer/>
      </div>

    </div >
  );
};


export default Perfil;
