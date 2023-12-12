import React, { useEffect, useState } from "react";
import "../css/Familia.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupsIcon from '@mui/icons-material/Groups';
import Navegador from "../Navegador";
import { useParams } from "react-router";


const Evento = () => {

    const { id } = useParams()

    const [familia, setFamilia] = useState({})
    const [miembros, setMiembros] = useState([])
    const [eventos, setEventos] = useState([])

    useEffect(() => {
        const API_FAMILIA = `http://localhost:3300/api/familia/${id}`

        const peticion = fetch(API_FAMILIA)
        peticion
            .then((resp) => {
                return resp.json()
            })
            .then((eventosFamilia) => {
                setFamilia(eventosFamilia[0])
                setEventos(eventosFamilia)
            })
            .catch((error) => window.alert(error))

        //https://es.locationiq.com/
    }, [id])

    let iniciales = miembros.map(objeto => objeto.nombreUsuario
        .split(" ")
        .map(elem => elem[0])
        .join(" ")
    )

    console.log(eventos)

    return (
        <div className='familia'>
            <Navegador />
            <section className="familia-flex">
                <h1 className="titulo-familia">{familia.nombreFamilia}</h1>
                <section className="info-familia">
                    <div className="img-miembros">
                        <img className="img-familia" src="../img/bbq1.jpeg" alt="" />
                        <section className="miembros-familia">
                            <h3>Miembros</h3>
                        </section>
                    </div>
                    <section className="descripcion-Familia">
                        <h3>Descripcion</h3>

                    </section>
                </section>
                <h1 className="titulo-familia">EVENTOS FAMILIA</h1>
                {
                    eventos.map(evento => {
                        console.log(evento)
                        
                    })
                }
            </section>
        </div>
    );
}

export default Evento;
