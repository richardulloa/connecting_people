import React from "react";
import './css/InicioConLogin.css'
import Navegador from "./Navegador";


const InicioConLogin = () => {

    return (
        <div className="contenido-inicio">
            <header>
                <Navegador />
            </header>

            <main className="contenido">
                <section className="secciones proximos-eventos">
                    <h2>Proximos Eventos</h2>
                </section>

                <section className="secciones tusEventos">
                    <h2>Tus Eventos</h2>
                </section>

                <div className="eventosFamilias">
                    <section className="secciones eventos-ciudad">
                        <h2>Eventos Ciudad</h2>
                    </section>

                    <section className="secciones tusFamilias">
                        <h2>Tus Familias</h2>
                    </section>
                </div>

                <section className="secciones tradiciones">
                    <h2>Tradiciones</h2>
                </section>


            </main>
        </div>
    )
}

export default InicioConLogin