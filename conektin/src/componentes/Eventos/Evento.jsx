import React, { useContext, useEffect, useState } from "react";
import "./css/Evento.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import Navegador from "../Navegador";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Contexto from "../../context/Contexto";
import InteresesEvento from '../Intereses/InteresesEvento';
import Footer from "../Footer";


const Evento = () => {

    const { id } = useParams()

    const { usuario } = useContext(Contexto)

    const [evento, setEvento] = useState({})
    const [miembros, setMiembros] = useState([])
    const [usuarioEnFamilia, setUsuarioEnFamilia] = useState()
    const [usuarioEnEvento, setUsuarioEnEvento] = useState()
    const [iniciales, setIniciales] = useState([])
    const [interesesEvento, setInteresesEvento] = useState([])

    useEffect(() => {
        const API_EVENTO = `http://localhost:3300/api/eventos/${id}`
        const API_MIEMBROS = `http://localhost:3300/api/miembrosevento/${id}`
        const API_INTERESES_EVENTO = `http://localhost:3300/api/getinteresesevento/${id}`

        const peticion = fetch(API_EVENTO)
        peticion
            .then((resp) => {
                return resp.json()
            })
            .then((evento) => {
                setEvento(evento[0])
            })
            .catch((error) => window.alert(error))


        const peticionInteresesEvento = fetch(API_INTERESES_EVENTO)
        peticionInteresesEvento
            .then(resp => {
                return resp.json()
            })
            .then(interesesEvento => {
                setInteresesEvento(interesesEvento)
            })
            .catch((error) => window.alert(error))

        const peticionMiembros = fetch(API_MIEMBROS)
        peticionMiembros
            .then((resp) => {
                return resp.json()
            })
            .then(miembrosEvento => {
                setMiembros(miembrosEvento)
                setIniciales(miembros.map(objeto => objeto.nombreUsuario
                    .split(" ")
                    .map(elem => elem[0])
                ))
            })
            .catch((error) => window.alert(error))


    }, [id])


    useEffect(() => {
        const API_USUARIO_FAMILIA = "http://localhost:3300/api/usuarioeninfo"

        if (usuario) {
            const parametros = {
                method: 'GET',
                headers: {
                    idusuario: usuario.idusuario,
                    idfamilia: evento.idfamilia,
                    idevento: evento.idevento
                },
                mode: 'cors'
            }
            const peticionUsuario = fetch(API_USUARIO_FAMILIA, parametros)
            peticionUsuario
                .then((resp) => {
                    return resp.json()
                })
                .then((usuarioInfo) => {
                    setUsuarioEnFamilia(usuarioInfo[0].usuarioEnFamilia)
                    setUsuarioEnEvento(usuarioInfo[0].usuarioEnEvento)
                })
                .catch((error) => window.alert(error))
        }

    }, [usuario, evento])


    const joinEvent = () => {

        const API_UNIRTE_EVENTO = `http://localhost:3300/api/unirteevento`

        const objetoDatos = {
            idusuario: usuario.idusuario,
            idevento: evento.idevento
        }

        const parametros = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objetoDatos),
            mode: 'cors'
        }

        const peticionEventos = fetch(API_UNIRTE_EVENTO, parametros)
        peticionEventos
            .then((resp) => resp.json())
            .then((mesage) => {
                if (mesage.error) {
                    alert("ALGO SALIO MAL")
                } else {
                    setUsuarioEnEvento(1)
                }
            })
            .catch((error) => alert(error))
    }

    useEffect(() => {
        const API_MIEMBROS = `http://localhost:3300/api/miembrosevento/${id}`

        const peticionMiembros = fetch(API_MIEMBROS)
        peticionMiembros
            .then((resp) => {
                return resp.json()
            })
            .then((miembrosEvento) => {
                setMiembros(miembrosEvento)
            })
            .catch((error) => window.alert(error))
    }, [usuarioEnEvento])

    useEffect(() => {
        setIniciales(miembros.map(miembro => miembro.nombreUsuario
            .split(" ")
            .map(elem => elem[0])
        ))
    }, [miembros])


    return (
        <div className='evento'>
            <Navegador />
            <div className="evento-box-flex">
                <div className="evento-info">
                    <header className="header-evento">
                        <h1 className="titulo-evento">{evento.nombreEvento}</h1>
                        <section className="botones-evento">

                            <Link className="enlace-familia-evento direct-familia" to={`/familia/${evento.idfamilia}`}><p><GroupsIcon fontSize="large" />{evento.nombreFamilia}</p></Link>
                            {
                                usuarioEnEvento
                                    ? <div className="enlace-familia-evento in-evento" to={`/familia/${evento.idfamilia}`}><p><EventIcon fontSize="large" />Ya estás en el evento</p></div>
                                    : usuarioEnFamilia
                                        ? <div onClick={joinEvent} className="enlace-familia-evento join-evento" to={`/familia/${evento.idfamilia}`}><p><EventIcon fontSize="large" />Unirse al evento</p></div>
                                        : <div className="enlace-familia-evento need-familia" to={`/familia/${evento.idfamilia}`}><p><EventIcon fontSize="large" />Unete a la familia</p></div>
                            }
                        </section>
                    </header>

                    <section className="more-event-info">
                        <section className="caja-evento">
                            <img className="imagen-evento" src={`../img/Eventos/evento${evento.idevento % 3 + 1}.jpg`} alt="imagen evento" />
                            <div className="caja-evento-info">
                                <p><CalendarMonthIcon fontSize="inherit" />{evento.fechaEvento}</p>
                                <p><LocationOnIcon fontSize="inherit" />{evento.calleEvento}, {evento.numerocalleEvento}</p>
                                {
                                    Object.keys(evento).length &&
                                    <a className="enlace-mapa" href={`https://www.google.com/maps/place/${evento.calleEvento.split(" ").join("+")}+${evento.numerocalleEvento}`} target="_blank" rel="noreferrer"><img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/02/google-maps-2961754.jpg?tf=3840x" alt="" /></a>
                                }
                            </div>
                        </section>
                        <section className="miembros-evento">
                            <h3 className="titulo-evento">Miembros</h3>
                            <div className="miembros-inside">
                                {
                                    iniciales.map((inicial, index) => {
                                        if (index > 11) {
                                            return (<></>)
                                        } else if (index <= 10) {
                                            return (
                                                <div key={index} className="miembros-iniciales">
                                                    {
                                                        inicial.map(ini =>
                                                            <span key={ini}>{ini}</span>
                                                        )
                                                    }
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
                            <h3 className="titulo-evento">Intereses</h3>
                            <div className="intereses-inside">
                                {
                                    interesesEvento.map(interesEvento =>
                                        <InteresesEvento className="interes-compo" key={interesEvento.idinteres} usuario={usuario} interes={interesEvento} interesesEvento={{ interesesEvento, setInteresesEvento }} />
                                    )
                                }
                            </div>
                        </section>
                    </section>
                    <h3 className="titulo-descripcion-evento">Descripcion</h3>
                    <p className="descripcion-evento">{evento.descripcionEvento}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Evento;
