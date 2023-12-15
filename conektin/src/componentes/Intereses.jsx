import React, { useEffect, useState } from "react";
import "./css/Intereses.css";
import AddBoxIcon from '@mui/icons-material/AddBox';
import DoneIcon from '@mui/icons-material/Done';

const Intereses = ({ usuario, interes, }) => {

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
        <h3>{interes.nombreInteres}</h3>
      </div>
      {
        interesEnUsuario
          ? <DoneIcon className="in-interes" sx={{ fontSize: 30 }} />
          : <AddBoxIcon onClick={seguirInteres} className="get-interes" sx={{ fontSize: 30 }} />
      }
    </div>
  );
};

export default Intereses;