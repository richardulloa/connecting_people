import React, { useEffect, useState } from "react";
import "./css/Evento.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupsIcon from '@mui/icons-material/Groups';
import Navegador from "./Navegador";
import { useParams } from "react-router";


const Evento = () => {

    const { id } = useParams()

    const [evento, setEvento] = useState({})

    useEffect(() => {
        const API_EVENTO = `http://localhost:3000/api/eventos/${id}`

        const peticion = fetch(API_EVENTO)
        peticion
            .then((resp) => {
                return resp.json()
            })
            .then((evento) => {
                setEvento(evento[0])
            })
            .catch((error) => window.alert(error))

        //https://es.locationiq.com/

    }, [id])

    let fechaEvento = ""

    if (Object.keys(evento).length) {
        fechaEvento = evento.fechaEvento.split("T")[0]
    }

    return (
        <div className='evento'>
            <Navegador />
            <div className="evento-box-flex">
                <div className="evento-info">
                    <h1 className="titulo-evento">{evento.nombreEvento}</h1>
                    <p><GroupsIcon fontSize="inherit" />Nombre familia idfamilia: {evento.idfamilia}</p>
                    <section className="caja-evento">
                        <img className="imagen-evento" src="../img/bbq1.jpeg" alt="imagen evento" />
                        <div className="caja-evento-info">
                            <p><CalendarMonthIcon fontSize="inherit" />{fechaEvento}</p>
                            <p><LocationOnIcon fontSize="inherit" />{evento.calleEvento}, {evento.numerocalleEvento}</p>
                            <section className="miembros-evento">
                                <h3>Miembros</h3>

                            </section>
                        </div>
                    </section>
                    <h3 className="titulo-descripcion-evento">Descripcion</h3>
                    <p className="descripcion-evento">{evento.descripcionEvento}</p>
                </div>
                <div className="mapa-evento">
                    MAPA
                </div>
            </div>
        </div>
    );
}

export default Evento;
