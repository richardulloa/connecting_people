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
            <main className='contenedor-tradiciones'>
                {Object.entries(tradicionesEstacion).map(([estacion, tradiciones]) => (
                    <div key={estacion.id}>
                        <h2>{estacion}</h2>
                        <ul>
                            {tradiciones.map((tradicion, index) => (
                                <div id='contenedor-tradiciones'>
                                    <li key={index} id={tradicion.id} className={tradicion.clase}>
                                        <div className='foto-tradicion'><img src={` ../img/Tradiciones/${tradicion.imagen}`} alt='castells' /></div>
                                        <div  className='detalle-tradicion'> 
                                            <h5 className='nombre-tradicion'>{tradicion.name}</h5>
                                            <p>{tradicion.description}</p>
                                        </div>
                                    </li>
                                </div>
                            ))}
                        </ul>


                    </div>
                ))}
            </main>
        </div>
    )
}

export default Tradiciones 
