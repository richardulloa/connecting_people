import React from "react";
import "../css/BuscaFamilia.css"
import Navegador from "../Navegador";
import VisualizarFamilia from "./VisualizarFamilia";

const BuscaFamilias = () => {
    return (
        <div className='contenido-busca-familia'>
            <Navegador />
            <main className="busca-familia-seccion">
                <h1 className="titulo-seccion">Familias</h1>
                <section className="familias-seccion">
                    <VisualizarFamilia />
                    <VisualizarFamilia />
                    <VisualizarFamilia />
                </section>
            </main>
        </div>
    );
}

export default BuscaFamilias;