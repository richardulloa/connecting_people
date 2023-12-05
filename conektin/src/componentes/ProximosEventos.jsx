import React from "react";
import "./css/ProximosEventos.css"
import Navegador from "./Navegador";
import VisualizarEvento from "./VisualizarEvento";

const ProximosEventos = () => {
    return (
        <div className='contenido-proximos-eventos'>
            <Navegador />
            <main className="proximos-eventos-seccion">
                <h1 className="titulo-seccion">Proximos Eventos</h1>
                <section className="eventos-seccion">
                    <VisualizarEvento />
                    <VisualizarEvento />
                    <VisualizarEvento />
                </section>

            </main>
        </div>
    );
}

export default ProximosEventos;
