import React from 'react';
import '../css/CerrarSesion.css'
import Navegador from '../Navegador';


function CerrarSesion() {

    const desconexion = () => {

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
