import React from "react";
import './css/InicioConLogin.css'
import Navegador from "./Navegador";
import { Link } from "react-router-dom";


const InicioConLogin = () => {

    return (
        <div className="contenido-inicio">
            <header>
                <Navegador />
            </header>

            <main className="contenido">
                <Link to={"/"} className="box-container">
                    <div className="box">
                        <div className="background-image" style={{ backgroundImage: `url("https://img.freepik.com/foto-gratis/grupo-diverso-amigos-disparar-verano_53876-47015.jpg?w=1380&t=st=1701516264~exp=1701516864~hmac=0d3acfe6acbb5d0bffea85f2894eaeea4ecf3f695238290dd3d8c931395cae14")` }}></div>
                        <div className="overlay">
                            <p className="text">Proximos Eventos</p>
                        </div>
                    </div>
                </Link>




                <Link className="secciones proximos-eventos">
                    <h2>Proximos Eventos</h2>
                </Link>

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