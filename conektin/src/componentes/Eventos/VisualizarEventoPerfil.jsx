import React from "react";
import "./css/VisualizarEventoPerfil.css"
import { Link } from "react-router-dom";


const VisualizarEvento = ({ evento }) => {

    return (
        <Link to={`/evento/${evento.idevento}`} className='contenido-evento-perfil'>
             <img src={`../img/Eventos/evento${evento.idevento%3+1}.jpg`} alt="Imagen prueba" />
            <section className="info-inicial-perfil">
                <h3>{evento.nombreEvento}</h3>
            </section>
        </Link>
    );
}

export default VisualizarEvento; 