import React, { useContext, useEffect, useState } from "react";
import Navegador from "../Navegador";
import Contexto from "../../context/Contexto";
import { useParams } from "react-router";

const BusquedaInteres = () => {

    //OBTENER EL NOMBRE DEL INTERES CON PARAMS ENVIADO DESDE EL NAVEGADOR Y ENVIAR ESE NOMBRE A LA API GG
    const [eventosInteres, setEventosInteres] = useState([])

    const { usuario } = useContext(Contexto)
    const { nombre } = useParams()


    useEffect(() => {

        const API_EVENTOS = "http://localhost:3300/api/eventointeres"

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

    }, [usuario])

    useEffect(() => {
        
    },[])

    return (
        <div className='contenido-proximos-eventos'>
            <Navegador />
            <main className="proximos-eventos-seccion">
                <h1 className="titulo-seccion">Resultados para: {nombre.split("+").slice(1)}</h1>
                <section className="eventos-seccion">
                    {

                    }
                </section>
            </main>
        </div>
    );
}

export default BusquedaInteres;
