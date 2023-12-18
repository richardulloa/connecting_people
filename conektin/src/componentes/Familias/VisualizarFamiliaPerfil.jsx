import React from "react";
import "./css/VisualizarFamiliaPerfil.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const VisualizarFamilia = ({ familia }) => {

    const id = familia.idfamilia
    const [miembrosFamilia, setMiembrosFamilia] = useState([])

    useEffect(() => {
        const API_MIEMBROS_FAMILIA = `http://localhost:3300/api/miembrosfamilia/${id}`

        const peticion = fetch(API_MIEMBROS_FAMILIA)
        peticion
            .then((resp) => {
                return resp.json()
            })
            .then((miembros) => {
                setMiembrosFamilia(miembros)
            })
            .catch((error) => window.alert(error))
    }, [id])


    return (
        <Link to={`/familia/${familia.idfamilia}`} className='contenido-familia-perfil'>
            <div className="flex-familia-perfil">
                <img src={`../img/Familias/familia${familia.idfamilia % 3 + 1}.jpg`} alt="Imagen prueba" />
                <section className="info-inicial-familia-perfil">
                    <h3>{familia.nombreFamilia}</h3>
                    <section className="miembros-visualizar-familia-perfil">
                        <h4>Miembros: <span>{miembrosFamilia.length} usuarios</span></h4>
                    </section>
                </section>
            </div>
        </Link>
    );
}

export default VisualizarFamilia;
