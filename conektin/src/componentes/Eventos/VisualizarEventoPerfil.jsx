import React from "react";
import "./css/VisualizarEventoPerfil.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from "react-router-dom";


const VisualizarEvento = ({ evento }) => {

    let fechaEvento = ""

    if (Object.keys(evento).length) {
        fechaEvento = evento.fechaEvento.split("T")[0]
    }

    return (
        <Link to={`/evento/${evento.idevento}`} className='contenido-evento-perfil'>
            <div className="flex-evento-perfil">
                <img src="../img/bbq1.jpeg" alt="Imagen prueba" />
                <section className="info-inicial-perfil">
                    <h3>{evento.nombreEvento}</h3>
                </section>
            </div>
            <section className="info-adicional-perfil">
                <p><CalendarMonthIcon /><span>{fechaEvento}</span></p>
                <p><LocationOnIcon />{evento.calleEvento}, {evento.numerocalleEvento}</p>
            </section>
        </Link>
    );
}

export default VisualizarEvento;