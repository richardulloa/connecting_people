import Contexto from '../../context/Contexto';
import React, { useContext } from 'react';
import './css/CerrarSesion.css'
import Navegador from '../Navegador';
import { useNavigate } from 'react-router';

function CerrarSesion() {

    const { usuario, setUsuario } = useContext(Contexto)

    const navigate = useNavigate()

    const desconexion = () => {
        const parametros = {
            method: 'GET',
            headers: {
                token: usuario.token,
            },
            mode: 'cors'
        }

        const API_LOGOUT = "http://localhost:3300/api/logout"

        const peticion = fetch(API_LOGOUT, parametros)
        peticion
            .then((resp) => resp.json())
            .then((mensaje) => {
                if (mensaje.error) {
                    window.alert(mensaje.error)
                } else {
                    sessionStorage.removeItem('usuario')
                    setUsuario(null)
                    navigate("/")
                }
            })
            .catch((error) => window.alert(error))
    }

    return (
        <div>
            <Navegador />
            <main className='mainCerrarSesion'>
                <form className='formularioCerrar'>
                    <h1>Cerrar Sesión</h1>

                    <div className='cerrarSession'>
                        <h2>Estas seguro que quieres salir?</h2>

                        <button type='button' onClick={desconexion}>Cerrar Session</button>
                    </div>

                </form>
            </main>
        </div>
    )
}

export default CerrarSesion
