import Contexto from '../../context/Contexto';
import React, { useContext } from 'react';
import '../css/CerrarSesion.css'
import Navegador from '../Navegador';


function CerrarSesion() {

    const { usuario, setUsuario } = useContext(Contexto)

    console.log(usuario)

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
                    setUsuario(null)
                    sessionStorage.removeItem('usuario')
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
