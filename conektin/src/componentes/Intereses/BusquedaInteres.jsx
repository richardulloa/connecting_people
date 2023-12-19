import React, { useEffect, useState } from "react";
import "./css/BusquedaInteres.css"
import Navegador from "../Navegador";
import { useParams } from "react-router";
import VisualizarEvento from "../Eventos/VisualizarEvento";
import Footer from "../Footer";


const BusquedaInteres = () => {

    const [eventosInteres, setEventosInteres] = useState([])

    const { nombre } = useParams()

    useEffect(() => {

        const API_EVENTOS = "http://localhost:3300/api/eventosinteres"

        const parametros = {
            method: 'GET',
            headers: {
                nombre: nombre.split("+").slice(1)
            },
            mode: 'cors'
        }
        const peticion = fetch(API_EVENTOS, parametros)
        peticion
            .then((resp) => {
                return resp.json()
            })
            .then((eventos) => {
                setEventosInteres(eventos)
            })
            .catch((error) => window.alert(error))

    }, [nombre])

    return (
        <div className='contenido-busqueda-interes'>
            <section>
                <Navegador />
                <main className="busqueda-interes-seccion">
                    <h1 className="titulo-seccion">Resultados para: "{nombre.split("+").slice(1)}"</h1>
                    <section className="busqueda-seccion">
                        {
                            nombre.split("+").slice(1)[0].length > 2
                                ? eventosInteres.length > 0
                                    ? eventosInteres.map(evento => <VisualizarEvento key={evento.idevento} evento={evento} />)
                                    : <h2 className="no-interes">No hay eventos con este interes</h2>
                                : <h2 className="no-interes">Escribe un interes para buscarlo</h2>
                        }
                    </section>
                </main>

            </section>
            <Footer className="footer-busqueda" />
        </div>
    );
}

export default BusquedaInteres;
