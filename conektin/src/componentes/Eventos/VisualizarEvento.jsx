import React, { useEffect, useState } from "react";
import "./css/VisualizarEvento.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from "react-router-dom";

const VisualizarEvento = ({ evento }) => {

    const [infoEvento, setInfoEvento] = useState({})

    useEffect(() => {
        const API_INFO_EVENTO = `http://localhost:3300/api/infoevento/${evento.idevento}`

        const peticionUsuario = fetch(API_INFO_EVENTO)
        peticionUsuario
            .then((resp) => {
                return resp.json()
            })
            .then((infoEvento) => {
                setInfoEvento(infoEvento[0])
            })
            .catch((error) => window.alert(error))
    }, [evento.idevento])

    return (
        <Link to={`/evento/${evento.idevento}`} className='contenido-evento'>
            <div className="flex-evento">
                <img src={`../img/Eventos/evento${evento.idevento % 3 + 1}.jpg`} alt="Imagen prueba" />

                {
                    infoEvento &&
                    (
                        <section className="info-inicial">
                            <h3>{evento.nombreEvento}</h3>
                            <h3 className="family"><GroupsIcon /><span className="nombre-familia">{infoEvento.nombreFamilia}</span></h3>
                            <p>Organizador: <strong>{infoEvento.nombreUsuario}</strong></p>
                        </section>
                    )
                }
            </div>
            <section className="info-adicional">
                <p><CalendarMonthIcon /><span>{evento.fechaEvento}</span></p>
                <p><LocationOnIcon />{evento.calleEvento}, {evento.numerocalleEvento}</p>
            </section>
        </Link >
    );
}

export default VisualizarEvento;