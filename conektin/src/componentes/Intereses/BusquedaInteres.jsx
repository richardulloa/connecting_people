import React, { useContext, useEffect, useState } from "react";
import "./css/ProximosEventos.css"
import Navegador from "../Navegador";
import VisualizarEvento from "./VisualizarEvento";
import Contexto from "../../context/Contexto";

const BusquedaInteres = () => {

    //OBTENER EL NOMBRE DEL INTERES CON PARAMS ENVIADO DESDE EL NAVEGADOR Y ENVIAR ESE NOMBRE A LA API GG
    const [proximosEventos, setProximosEventos] = useState([])

    const { usuario } = useContext(Contexto)

    useEffect(() => {

        const API_EVENTOS = "http://localhost:3300/api/eventos"

        if (usuario) {

            const objetoDatos = {
                idusuario: usuario.idusuario,
            }

            const parametros = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objetoDatos),
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
        </div>
    );
}

export default BusquedaInteres;
