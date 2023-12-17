import React from "react";
import "./css/VisualizarFamilia.css"
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


    let iniciales = miembrosFamilia.map(objeto => objeto.nombreUsuario
        .split(" ")
        .map(elem => elem[0])
    )

    return (
        <Link to={`/familia/${familia.idfamilia}`} className='contenido-familia'>
            <div className="flex-familia">
                <img src={`../img/Familias/familia${familia.idfamilia%3+1}.jpg`} alt="Imagen prueba" />
                <section className="info-inicial-familia">
                    <h3>{familia.nombreFamilia}</h3>
                    <p>Organizador familia: <strong>{familia.nombreUsuario}</strong></p>
                    <section className="miembros-visualizar-familia">
                        <h4>Miembros</h4>
                        <div className="flex-miembros">
                            {
                                iniciales.map((inicial, index) => {
                                    if (index > 9) {
                                        return (<></>)
                                    } else if (index <= 8) {
                                        return (
                                            <div key={index} className="caja-miembros">
                                                {
                                                    inicial.map(ini =>
                                                        <span>{ini}</span>
                                                    )
                                                }
                                            </div>
                                        )
                                    } else {
                                        return (<div key={index} className="caja-miembros">
                                            ...
                                        </div>)
                                    }
                                })
                            }
                        </div>
                    </section>
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
