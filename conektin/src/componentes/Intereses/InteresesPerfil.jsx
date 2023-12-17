import React, { useEffect, useState } from "react";
import "./css/Intereses.css";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';

const InteresesPerfil = ({ usuario, interes }) => {

  const [interesEnUsuario, setInteresEnUsuario] = useState()

  useEffect(() => {

    const API_INTERES_USUARIO = `http://localhost:3300/api/getinteresinusuario`

    const parametros = {
      method: 'GET',
      headers: {
        idusuario: usuario.idusuario,
        idinteres: interes.idinteres,
      },
      mode: 'cors'
    }

    const peticionUsuario = fetch(API_INTERES_USUARIO, parametros)
    peticionUsuario
      .then((resp) => {
        return resp.json()
      })
      .then((usuarioInfo) => {
        setInteresEnUsuario(usuarioInfo[0].interesusuario)
      })
      .catch((error) => window.alert(error))

  }, [])


  const seguirInteres = () => {
    const API_SEGUIR_INTERES = `http://localhost:3300/api/postinteresusuario`

    const objetoDatos = {
      idusuario: usuario.idusuario,
      idinteres: interes.idinteres
    }

    const parametros = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(objetoDatos),
      mode: 'cors'
    }

    const peticionUsuario = fetch(API_SEGUIR_INTERES, parametros)
    peticionUsuario
      .then((resp) => {
        return resp.json()
      })
      .then((mesage) => {
        if (mesage.error) {
          alert("ALGO SALIO MAL")
        } else {
          setInteresEnUsuario(true)
        }
      })
      .catch((error) => window.alert(error))
  }

  return (
    <div className="intereses">
      <div className="interes">
        <h4>{interes.nombreInteres}</h4>
      </div>
      {
        interesEnUsuario
          ? <BookmarkIcon className="in-interes" fontSize="inherit" />
          : <BookmarkAddIcon onClick={seguirInteres} className="get-interes" fontSize="inherit" />
      }
    </div>
  );
};

export default InteresesPerfil;