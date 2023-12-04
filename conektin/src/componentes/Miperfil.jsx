import React from 'react';
import './css/Miperfil.css'

const Miperfil = () => {
    return (
        <div className='perfil'>
            <header>
            </header>
            <div className="contenidoPerfil">
                {/* Barra lateral */}
                <div className="barraLateral">
                    {/* Imagen de perfil */}
                    <div className="imagenPerfil">

                    </div>
                </div>

                {/* Resto del contenido del perfil */}
            </div>
            <div className="eventosPerfil">
                <div
                    className="cajaEvento"
                >
                    {/* Contenido de la Caja 1 */}
                </div>

                {/* Caja 2 */}
                <div
                    className="cajaEvento"
                >
                    {/* Contenido de la Caja 2 */}
                </div>

            </div>
        </div>
    );
}

export default Miperfil;
