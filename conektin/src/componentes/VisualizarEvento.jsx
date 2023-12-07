import React from "react";
import "./css/VisualizarEvento.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from "react-router-dom";


const VisualizarEvento = ({evento}) => {

    let fechaEvento = ""

    if(Object.keys(evento).length){
        fechaEvento = evento.fechaEvento.split("T")[0]
    }

    return (
        <Link to={`/evento/${evento.ideventos}`} className='contenido-evento'>
            <div className="flex-evento">
                <img src="../img/bbq1.jpeg" alt="Imagen prueba" />
                <section className="info-inicial">
                    <h3>{evento.nombreEvento}</h3>
                    <h3 className="family"><GroupsIcon /><span className="nombre-familia">Nombre familia</span></h3>
                    <p>Nombre organizador</p>
                </section>
            </div>
            <section className="info-adicional">
                <p><CalendarMonthIcon /><span>{fechaEvento}</span></p>
                <p><LocationOnIcon />{evento.calleEvento}, {evento.numerocalleEvento}</p>
            </section>
        </Link>
    );
}

export default VisualizarEvento;
