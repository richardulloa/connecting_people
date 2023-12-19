import React from 'react'
import './css/Footer.css'
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
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
          <div className="enlacespag">
            <Link to={"/perfil"}>Perfil</Link>
            <Link to={"/cerrarsesion"}>Registrate</Link>
            <Link to={"/ayuda"}>Ayuda</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
