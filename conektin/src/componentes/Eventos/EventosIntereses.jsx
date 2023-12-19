import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router"
import Contexto from "../../context/Contexto"
import Navegador from "../Navegador"
import VisualizarEvento from "./VisualizarEvento"
import "./css/EventosIntereses.css"
import Footer from "../Footer";


const EventosIntereses = () => {

    const [interesesIdUsuario, setInteresesIdUsuario] = useState([])

    const [eventosInteresesUsuario, setEventosInteresesUsuario] = useState([])

    const { nombre } = useParams()
    const { usuario } = useContext(Contexto)
    useEffect(() => {
        if (usuario) {
            const API_INTERESES_USUARIO = `http://localhost:3300/api/getinteresesusuario/${usuario.idusuario}`

            const peticion = fetch(API_INTERESES_USUARIO)
            peticion
                .then((resp) => {
                    return resp.json()
                })
                .then((intereses) => {
                    setInteresesIdUsuario(intereses.map(interes => interes.idinteres))
                })
                .catch((error) => window.alert(error))
        }
    }, [usuario])

    useEffect(() => {
        if (interesesIdUsuario.length) {
            const API_EVENTOS_INTERESES = `http://localhost:3300/api/eventosinteresusuario`

            const parametros = {
                method: 'GET',
                headers: {
                    intereses: interesesIdUsuario
                },
                mode: 'cors'
            }

            const peticion = fetch(API_EVENTOS_INTERESES, parametros)
            peticion
                .then((resp) => {
                    return resp.json()
                })
                .then((eventos) => {
                    setEventosInteresesUsuario(eventos)
                })
                .catch((error) => window.alert(error))
        }

    }, [interesesIdUsuario])

    return (
        <div className="contenido-eventos-intereses">
            <section>
                <Navegador />
                <main className="eventos-intereses">
                    <h1 className="titulo-seccion">Eventos para ti</h1>
                    <section className="eventos-parati">
                        {
                            interesesIdUsuario.length
                                ? (eventosInteresesUsuario.map((evento, index) => {

                                    return <VisualizarEvento key={evento.idevento} evento={evento} />
                                }
                                ))
                                : (<h2 className="no-interes-evento">No hay eventos con tus intereses</h2>)
                        }
                    </section>
                </main>
            </section>
            <Footer />
        </div>
    )

}

export default EventosIntereses;