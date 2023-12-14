import React, { useEffect, useState } from "react";
import "./css/Evento.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import Navegador from "../Navegador";
import { useParams } from "react-router";
import { Link } from "react-router-dom";


const Evento = () => {

    const { id } = useParams()

    const [evento, setEvento] = useState({})
    const [miembros, setMiembros] = useState([])

    useEffect(() => {
        const API_EVENTO = `http://localhost:3300/api/eventos/${id}`

        const peticion = fetch(API_EVENTO)
        peticion
            .then((resp) => {
                return resp.json()
            })
            .then((evento) => {
                setEvento(evento[0])
            })
            .catch((error) => window.alert(error))

        const API_MIEMBROS = `http://localhost:3300/api/miembrosevento/${id}`

        const peticionMiembros = fetch(API_MIEMBROS)
        peticionMiembros
            .then((resp) => {
                return resp.json()
            })
            .then((miembrosEvento) => {
                setMiembros(miembrosEvento)
            })
            .catch((error) => window.alert(error))
    }, [id])

    let fechaEvento = ""

    if (Object.keys(evento).length) {
        fechaEvento = evento.fechaEvento.split("T")[0]
    }

    let iniciales = miembros.map(objeto => objeto.nombreUsuario
        .split(" ")
        .map(elem => elem[0])
        .join(" ")
    )

    return (
        <div className='evento'>
            <Navegador />
            <div className="evento-box-flex">
                <h1 className="titulo-evento">{evento.nombreEvento}</h1>
                <div className="evento-info">
                    <section className="botones-evento">
                        <Link className="enlace-familia-evento" to={`/familia/${evento.idfamilia}`}><p><GroupsIcon fontSize="large" />{evento.nombreFamilia}</p></Link>
                        <div className="enlace-familia-evento join-evento" to={`/familia/${evento.idfamilia}`}><p><EventIcon fontSize="large" />Unirse al evento</p></div>
                    </section>

                    <section className="more-event-info">
                        <section className="caja-evento">
                            <img className="imagen-evento" src="../img/bbq1.jpeg" alt="imagen evento" />
                            <div className="caja-evento-info">
                                <p><CalendarMonthIcon fontSize="inherit" />{fechaEvento}</p>
                                <p><LocationOnIcon fontSize="inherit" />{evento.calleEvento}, {evento.numerocalleEvento}</p>
                            </div>
                        </section>
                        <section className="miembros-evento">
                            <h3>Miembros</h3>
                            <div className="miembros-inside">
                                {
                                    iniciales.map((inicial, index) => {
                                        if (index > 11) {
                                            return (<></>)
                                        } else if (index <= 10) {
                                            return (
                                                <div key={index} className="miembros-iniciales">
                                                    {inicial}
                                                </div>
                                            )
                                        } else {
                                            return (<div key={index} className="miembros-iniciales">
                                                ...
                                            </div>)
                                        }
                                    })
                                }
                            </div>
                        </section>
                    </section>
                    <h3 className="titulo-descripcion-evento">Descripcion</h3>
                    <p className="descripcion-evento">{evento.descripcionEvento}</p>
                </div>
            </div>
        </div>
    );
}

export default Evento;
