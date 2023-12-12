import React from "react";
import "../css/VisualizarFamilia.css"
import { Link } from "react-router-dom";


const VisualizarFamilia = ({familia}) => {

    

    return (
        <Link to={`/familia/${familia.idfamilia}`} className='contenido-familia'>
            <div className="flex-familia">
                <img src="../img/bbq1.jpeg" alt="Imagen prueba" />
                <section className="info-inicial-familia">
                    <h3>{familia.nombreFamilia}</h3>
                    <p>Organizador familia: <strong>{familia.nombreUsuario}</strong></p>
                </section>
                <section className="descripcion-familia">
                    <h4>Descripcion</h4>
                    <p>{familia.descripcionFamilia}</p>
                </section>
            </div>
        </Link>
    );
}

export default VisualizarFamilia;
