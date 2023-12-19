import React, { useContext } from 'react'
import './css/Footer.css'
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Contexto from '../context/Contexto';

function Footer() {

  const { usuario } = useContext(Contexto)

  return (
    <div>
      <footer className="pie">
        <div className="pie-flex">
          <div className="enlacesimg">
            <h3>Siguenos</h3>
            <FacebookIcon className="fi" fontSize="large" />
            <TwitterIcon className="ti" fontSize="large" />
            <InstagramIcon className="ii" fontSize="large" />
          </div>
          {
            usuario &&
            <div className="enlacespag">
              <Link to={`/perfil/${usuario.idusuario}`}>Perfil</Link>
              <Link to={"/logout"}>Cerrar Sesion</Link>
              <Link to={"/ayuda"}>Ayuda</Link>
            </div>
          }
        </div>
      </footer>
    </div>
  )
}

export default Footer
