import React from "react";
import "./css/VisualizarFamilia.css"
import { Link } from "react-router-dom";


const VisualizarFamilia = () => {
    return (
        <Link to={"/evento"} className='contenido-familia'>
            <div className="flex-familia">
                <img src="../img/bbq1.jpeg" alt="Imagen prueba" />
                <section className="info-inicial">
                    <h3>Nombre Familia</h3>
                    <p>Nombre organizador</p>
                </section>
                <section className="descripcion-familia">
                    <h4>Descripcion</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>

                </section>
            </div>
        </Link>
    );
}

export default VisualizarFamilia;
