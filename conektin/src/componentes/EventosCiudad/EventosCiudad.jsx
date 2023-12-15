import React from "react";
import './css/EventosCiudad.css'
import Navegador from "../Navegador";
import { Link } from "react-router-dom";


const EventosCiudad = () => {

    return (
        <div className="ciudad-eventos">
            <Navegador />
            <main className="webs-eventos">
                <h1 className="titulo-ciudad-eventos">Eventos Ciudad</h1>

            </main>
        </div>
    )
}

export default EventosCiudad