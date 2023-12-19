import React, { useContext, useEffect, useState } from "react";
import "./css/ProximosEventos.css"
import Navegador from "../Navegador";
import VisualizarEvento from "./VisualizarEvento";
import Contexto from "../../context/Contexto";
import Footer from "../Footer";

const ProximosEventos = () => {

    const [proximosEventos, setProximosEventos] = useState([])

    const { usuario } = useContext(Contexto)

    useEffect(() => {

        const API_EVENTOS = "http://localhost:3300/api/eventos"

        if (usuario) {
            const parametros = {
                method: 'GET',
                headers: {
                    idusuario: usuario.idusuario,
                },
                mode: 'cors'
            }

            const peticion = fetch(API_EVENTOS, parametros)
            peticion
                .then((resp) => {
                    return resp.json()
                })
                .then((eventos) => {
                    setProximosEventos(eventos)
                })
                .catch((error) => window.alert(error))
        }

    }, [usuario])

    return (
        <div className='contenido-proximos-eventos'>
            <section>
                <Navegador />
                <main className="proximos-eventos-seccion">
                    <h1 className="titulo-seccion">Proximos Eventos</h1>
                    <section className="eventos-seccion">
                        {
                            proximosEventos.map((evento) => {
                                return (
                                    <VisualizarEvento key={evento.idevento} evento={evento} />
                                )
                            })
                        }
                    </section>
                </main>
            </section>
            <Footer />
        </div>
    );
}

export default ProximosEventos;
