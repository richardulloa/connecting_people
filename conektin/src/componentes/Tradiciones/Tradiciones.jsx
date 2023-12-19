import React from 'react'
import Navegador from '../Navegador.jsx';
import './css/Tradiciones.css'
import DatosTradiciones from './Datos/DatosTradiciones.js'
import Footer from "../Footer";


function Tradiciones() {
    const tradicionesEstacion = DatosTradiciones

    if (!tradicionesEstacion) {
        return (
            <div>
                <p>Error: No se encontraron datos de tradiciones.</p>
            </div>
        );
    }
    return (
        <div className='tradicion-cultura'>
            <header id='encabezado'>
                <Navegador />
                <h1 id='title'>TRADICIÓN Y CULTURA CATALANA EN LA CIUDAD DE BARCELONA</h1>
                <p id='subtitle'>Conoce, según según la estación del año, un listado y breve explicacion de cada una de ellas. También tienes otro apartado de cultura típica</p>
                <div className='barra'>
                    <ul className='lista-nav'>
                        {
                            Object.entries(tradicionesEstacion).map(([estacion, tradiciones], index) => {
                                return (
                                    <li key={index}><a href={`#${tradiciones[0].id}`}>{estacion}</a></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </header>

            <main className='contenedor-tradiciones'>
                {Object.entries(tradicionesEstacion).map(([estacion, tradiciones]) => (
                    <div key={estacion.id}>
                        <h2>{estacion}</h2>
                        <section className='tradiciones-estacion'>
                            {tradiciones.map((tradicion) => (
                                <section key={tradicion.id} id={tradicion.id} className='contenedor-tradicion'>
                                    <img className='foto-tradicion' src={` ../img/Tradiciones/${tradicion.imagen}`} alt='castells' />
                                    <div className='detalle-tradicion'>
                                        <h5 className='nombre-tradicion'>{tradicion.name}</h5>
                                        <p>{tradicion.description}</p>
                                    </div>
                                </section>
                            ))}
                        </section>
                    </div>
                ))
                }
            </main >
            <Footer />
        </div >
    )
}

export default Tradiciones 
