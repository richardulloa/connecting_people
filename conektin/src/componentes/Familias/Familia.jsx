import React, { useContext, useEffect, useState } from "react";
import "./css/Familia.css"
import Navegador from "../Navegador";
import VisualizarEvento from "../Eventos/VisualizarEvento";
import { useParams } from "react-router";
import Contexto from "../../context/Contexto";



const Evento = () => {

    const { id } = useParams()
    const { usuario } = useContext(Contexto)

    const [familia, setFamilia] = useState({})
    const [miembros, setMiembros] = useState([])
    const [eventos, setEventos] = useState([])
    const [join, setJoin] = useState(false)
    const [iniciales, setIniciales] = useState([])


    useEffect(() => {
        const API_FAMILIA = `http://localhost:3300/api/familia/${id}`

        const peticionFamilia = fetch(API_FAMILIA)
        peticionFamilia
            .then((resp) => {
                return resp.json()
            })
            .then((eventosFamilia) => {
                setFamilia(eventosFamilia[0])
            })
            .catch((error) => window.alert(error))

        //https://es.locationiq.com/

        const API_MIEMBROS_FAMILIA = `http://localhost:3300/api/miembrosfamilia/${id}`

        const peticionMiembros = fetch(API_MIEMBROS_FAMILIA)
        peticionMiembros
            .then((resp) => {
                return resp.json()
            })
            .then((miembrosFamilia) => {
                setMiembros(miembrosFamilia)
                setIniciales(miembrosFamilia.map(miembro => miembro.nombreUsuario
                    .split(" ")
                    .map(elem => elem[0])
                    .join(" "))
                )
                usuario &&
                    setJoin(miembrosFamilia.some(miembro => miembro.nombreUsuario === usuario.nombreUsuario))
            })
            .catch((error) => window.alert(error))

        const API_EVENTOS_FAMILIA = `http://localhost:3300/api/eventosfamilia/${id}`

        const peticionEventos = fetch(API_EVENTOS_FAMILIA)
        peticionEventos
            .then((resp) => {
                return resp.json()
            })
            .then((eventosFamilia) => {
                setEventos(eventosFamilia)
            })
            .catch((error) => window.alert(error))
    }, [id, usuario])

    const joinFamily = () => {

        const API_UNIRTE_FAMILIA = `http://localhost:3300/api/unirtefamilia`

        const objetoDatos = {
            idusuario: usuario.idusuario,
            idfamilia: familia.idfamilia
        }

        const parametros = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objetoDatos),
            mode: 'cors'
        }

        const peticionEventos = fetch(API_UNIRTE_FAMILIA, parametros)
        peticionEventos
            .then((resp) => resp.json())
            .then((mesage) => {
                if (mesage.error) {
                    alert("ALGO SALIO MAL")
                } else {
                    setJoin(true)
                }
            })
            .catch((error) => alert(error))
    }

    useEffect(() => {
        const API_MIEMBROS_FAMILIA = `http://localhost:3300/api/miembrosfamilia/${id}`

        const peticionMiembros = fetch(API_MIEMBROS_FAMILIA)
        peticionMiembros
            .then((resp) => {
                return resp.json()
            })
            .then((miembrosFamilia) => {
                setMiembros(miembrosFamilia)
            })
            .catch((error) => window.alert(error))
    }, [join])

    useEffect(() => {
        setIniciales(miembros.map(objeto => objeto.nombreUsuario
            .split(" ")
            .map(elem => elem[0])
            .join(" ")
        ))
    }, [miembros])


    return (
        <div className='familia'>
            <Navegador />
            <section className="familia-flex">
                {
                    familia &&
                    (<header className="header-familia">
                        <h1 className="titulo-familia">{familia.nombreFamilia}</h1>
                        {
                            join
                                ? <div className="div-fam"><span>Tu familia</span></div>
                                : <div className="div-fam"><span onClick={joinFamily} className="button-join-fam">Unirte a la familia</span></div>
                        }
                    </header>)
                }

                <section className="info-familia">
                    <div className="img-miembros">
                        <img className="img-familia" src="../img/bbq1.jpeg" alt="imagen familia" />
                        <section className="miembros-familia">
                            <h3>Miembros</h3>
                            <div className="miembrosFlex">
                                {
                                    iniciales.map((inicial, index) => {
                                        if (index > 41) {
                                            return (<></>)
                                        } else if (index <= 40) {
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
                    </div>
                    {
                        familia && (
                            <section className="descripcion-Familia">
                                <h3>Descripcion</h3>
                                <p>{familia.descripcionFamilia}</p>
                            </section>
                        )
                    }
                </section>
                <h1 className="titulo-familia">Eventos Familia</h1>
                <section className="eventos-familia">
                    {
                        eventos.length
                            ? eventos.map(evento => {
                                return (
                                    <VisualizarEvento key={evento.idevento} evento={evento} />
                                )
                            })
                            : <h2>De momento no hay eventos en esta familia</h2>
                    }
                </section>
            </section>
        </div>
    );
}

export default Evento;
