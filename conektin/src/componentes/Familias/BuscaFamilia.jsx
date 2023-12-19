import React from "react";
import "./css/BuscaFamilia.css"
import Navegador from "../Navegador";
import VisualizarFamilia from "./VisualizarFamilia";
import { useState, useEffect } from "react";
import Footer from "../Footer";

const BuscaFamilias = () => {

    const [familias, setFamilias] = useState([])

    useEffect(() => {

        const API_FAMILIAS = "http://localhost:3300/api/familias"

        const peticion = fetch(API_FAMILIAS)
        peticion
            .then((resp) => {
                return resp.json()
            })
            .then((familias) => {
                setFamilias(familias)
            })
            .catch((error) => window.alert(error))
    }, [])

    return (
        <div className='contenido-busca-familia'>
            <section>
                <Navegador />
                <main className="busca-familia-seccion">
                    <h1 className="titulo-seccion">Familias</h1>
                    <section className="familias-seccion">
                        {
                            familias.map(familia => {
                                return (
                                    <VisualizarFamilia key={familia.idfamilia} familia={familia} />
                                )
                            })
                        }
                    </section>
                </main>

            </section>
            <Footer />
        </div>
    );
}

export default BuscaFamilias;