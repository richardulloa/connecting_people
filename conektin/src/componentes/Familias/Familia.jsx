import React, { useContext, useEffect, useState } from "react";
import "./css/Familia.css"
import Navegador from "../Navegador";
import VisualizarEvento from "../Eventos/VisualizarEvento";
import { useParams } from "react-router";
import Contexto from "../../context/Contexto";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { Link } from "react-router-dom";
import Footer from "../Footer";


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
                    .map(elem => elem[0]))
                )
                if (usuario) {
                    setJoin(miembrosFamilia.some(miembro => miembro.idusuario === usuario.idusuario))
                }
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
    }, [join, id])

    useEffect(() => {
        setIniciales(miembros.map(objeto => objeto.nombreUsuario
            .split(" ")
            .map(elem => elem[0])
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
                                ? (
                                    <section className="section-fam-header">
                                        <div className="div-fam-span"><span><Diversity3Icon className="group-icon" />Tu familia</span></div>
                                        <Link to={`/crear-evento/${familia.idfamilia}`}><div className="div-fam-span crear-evento"><span>Crear Evento</span></div></Link>
                                    </section>
                                )
                                : <div className="div-fam"><span onClick={joinFamily} className="button-join-fam"><GroupAddIcon className="group-icon" />Únete a la familia</span></div>
                        }
                    </header>)
                }

                <section className="info-familia">
                    <div className="img-miembros">
                        <img className="img-familia" src={`../img/Familias/familia${familia.idfamilia % 3 + 1}.jpg`} alt="imagen familia" />
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
                                                    {
                                                        inicial.map(ini =>
                                                            <span>{ini}</span>
                                                        )
                                                    }
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={index} className="miembros-iniciales">
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
            <Footer />

        </div>
    );
}

export default Evento;
