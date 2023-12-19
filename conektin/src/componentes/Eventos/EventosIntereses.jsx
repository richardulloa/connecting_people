import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router"
import Contexto from "../../context/Contexto"
import Navegador from "../Navegador"
import VisualizarEvento from "./VisualizarEvento"


const EventosIntereses = () => {

    const [interesesUsuario, setInteresesUsuario] = useState([])
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
                    setInteresesUsuario(intereses)
                })
                .catch((error) => window.alert(error))
        }
    }, [usuario])


    useEffect(() => {
        const interesid = interesesUsuario.map(interes => interes.idinteres)
        if (usuario) {
            const API_EVENTOS_INTERESES = `http://localhost:3300/api/eventosinteresusuario`

            const parametros = {
                method: 'GET',
                headers: {
                    intereses: interesid
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
    }, [interesesUsuario])

    console.log("EVENTOS INTERES:", eventosInteresesUsuario)

    return (
        <>
            <Navegador />
            {
            eventosInteresesUsuario.map((evento,index) =>{
                console.log(eventosInteresesUsuario.indexOf(evento))
                if(eventosInteresesUsuario.indexOf(evento) !== index){
                    return <></>
                }else {
                    return <VisualizarEvento key={evento.idevento} evento={evento}/>
                }
            })
            }
            
        </>
    )

}

export default EventosIntereses;