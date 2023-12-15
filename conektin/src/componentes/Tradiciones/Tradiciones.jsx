import React from 'react'
import Navegador from '../Navegador.jsx';
import './css/Tradiciones.css'
import DatosTradiciones from './Datos/DatosTradiciones.js'


function Tradiciones() {
    console.log(DatosTradiciones)
    const tradicionesEstacion = DatosTradiciones

    if (!tradicionesEstacion) {
        return (
            <div>
                <p>Error: No se encontraron datos de tradiciones.</p>
            </div>
        );
    }
    return (
        <div>
            <header id='encabezado'>
                <Navegador />
                <h1 id='title'>TRADICIÓN Y CULTURA CATALANA EN LA CIUDAD DE BARCELONA</h1>
                <p id='subtitle'>Conoce, según según la estación del año, un listado y breve explicacion de cada una de ellas. También tienes otro apartado de cultura típica</p>
                <div className='barra'>
                    <nav id='barrita'>
                        <a href='#C1'>Cultura</a>
                        <a href='#P1'>Primavera</a>
                        <a href='#V1'>Verano</a>
                        <a href='#O1'>Otoño</a>
                        <a href='#I1'>Invierno</a>
                    </nav>
                </div>
            </header>
            <main id='tradiciones'>
                {Object.entries(tradicionesEstacion).map(([estacion, tradiciones]) => (
                    <div key={estacion} id='contenedor'>
                        <h2>{estacion}</h2>
                        <div className='columnas'>
                            <ul>
                                {tradiciones.map((tradicion, index) => (
                                    <li key={index} id={tradicion.id}>
                                        <div id='cajitacontodo'>
                                        <div id='fotos'><img src={` ../img/Tradiciones/${tradicion.imagen}`} alt='castells' /></div>
                                        <strong className='titulos'>{tradicion.name}</strong>
                                        <p className='texto'>{tradicion.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                ))}
            </main>
        </div>
    )
}

export default Tradiciones 
