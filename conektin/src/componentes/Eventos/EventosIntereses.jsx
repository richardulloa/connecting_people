import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router"
import Contexto from "../../context/Contexto"
import Navegador from "../Navegador"


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
        if (usuario) {
            const API_EVENTOS_INTERESES = `http://localhost:3300/api/eventosinteresusuario/`

            const parametros = {
                method: 'GET',
                headers: {
                    intereses: JSON.stringify(interesesUsuario)
                },
                mode: 'cors'
            }

            const peticion = fetch(API_EVENTOS_INTERESES,parametros)
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

    console.log(interesesUsuario)
    return (
        <>
            <Navegador />
        </>
    )

}

export default EventosIntereses;