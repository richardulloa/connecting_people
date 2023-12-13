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

    useEffect(() => {
        const API_FAMILIA = `http://localhost:3300/api/familia/${id}`

        const peticionFamilia = fetch(API_FAMILIA)
        peticionFamilia
            .then((resp) => {
                return resp.json()
            })
            .then((eventosFamilia) => {
                setFamilia(eventosFamilia[0])
                setEventos(eventosFamilia)
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
            })
            .catch((error) => window.alert(error))

    }, [id])

    //console.log(miembros.some(miembro => miembro.idusuario === usuario.idusuario))

    console.log(familia)

    let iniciales = miembros.map(objeto => objeto.nombreUsuario
        .split(" ")
        .map(elem => elem[0])
        .join(" ")
    )

    return (
        <div className='familia'>
            <Navegador />
            <section className="familia-flex">
                {
                    familia &&
                    (<header>
                        <h1 className="titulo-familia">{familia.nombreFamilia}</h1>
                        {
                            miembros.some(miembro => miembro.idusuario === usuario.idusuario)
                            ? <></>
                            : <button>Unirme a esta familia</button>
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
                                <p>{familia.descripcionFamilia}{familia.descripcionFamilia}{familia.descripcionFamilia}{familia.descripcionFamilia}{familia.descripcionFamilia}{familia.descripcionFamilia}{familia.descripcionFamilia}{familia.descripcionFamilia}{familia.descripcionFamilia}{familia.descripcionFamilia}{familia.descripcionFamilia}{familia.descripcionFamilia}{familia.descripcionFamilia}{familia.descripcionFamilia}{familia.descripcionFamilia}{familia.descripcionFamilia}</p>
                            </section>
                        )
                    }
                </section>
                <h1 className="titulo-familia">Eventos Familia</h1>
                <section className="eventos-familia">
                    {
                        eventos.map(evento => {
                            return (
                                <VisualizarEvento key={evento.idevento} evento={evento} />
                            )
                        })
                    }
                </section>
            </section>
        </div>
    );
}

export default Evento;
