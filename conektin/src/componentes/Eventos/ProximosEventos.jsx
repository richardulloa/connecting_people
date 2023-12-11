import React, { useEffect, useState } from "react";
import "../css/ProximosEventos.css"
import Navegador from "../Navegador";
import VisualizarEvento from "./VisualizarEvento";

const ProximosEventos = () => {

    const [proximosEventos, setProximosEventos] = useState([])


    useEffect(() => {
        const API_EVENTOS = "http://localhost:3300/api/eventosfamilia"

        const peticion = fetch(API_EVENTOS)
        peticion
            .then((resp) => {
                return resp.json()
            })
            .then((eventos) => {
                setProximosEventos(eventos)
            })
            .catch((error) => window.alert(error))
    }, [])

    console.log(proximosEventos)

    return (
        <div className='contenido-proximos-eventos'>
            <Navegador />
            <main className="proximos-eventos-seccion">
                <h1 className="titulo-seccion">Proximos Eventos</h1>
                <section className="eventos-seccion">
                    {
                        proximosEventos.map((evento,index) => {
                            return (
                                <VisualizarEvento key={index} evento={evento} />
                            )
                        })
                    }
                </section>
            </main>
        </div>
    );
}

export default ProximosEventos;
