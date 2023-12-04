import React from "react";
import './css/InicioConLogin.css'
import Navegador from "./Navegador";
import { Link } from "react-router-dom";


const InicioConLogin = () => {

    return (
        <div className="contenido-inicio">
            <Navegador />

            <main className="contenido">

                <Link to={"/"} className="secciones proximos-eventos">
                    <div className="caja">
                        <div className="image pe"></div>
                        <div className="overlay">
                            <p className="text">Proximos Eventos</p>
                        </div>
                    </div>
                </Link>

                <Link to={"/"} className="secciones tus-eventos">
                    <div className="caja">
                        <div className="image te"></div>
                        <div className="overlay">
                            <p className="text">Tus Eventos</p>
                        </div>
                    </div>
                </Link>

                <section className="eventos-familias">
                    <Link to={"/"} className="secciones eventos-ciudad ">
                        <div className="caja">
                            <div className="image ec"></div>
                            <div className="overlay">
                                <p className="text">Eventos Ciudad</p>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/"} className="secciones tus-familias">
                        <div className="caja">
                            <div className="image tc"></div>
                            <div className="overlay">
                                <p className="text">Tradiciones Ciudad</p>
                            </div>
                        </div>
                    </Link>
                </section>

                <Link to={"/"} className="secciones tradiciones">
                    <div className="caja">
                        <div className="image tf"></div>
                        <div className="overlay">
                            <p className="text">Tus Familias</p>
                        </div>
                    </div>
                </Link>


            </main>
        </div>
    )
}

export default InicioConLogin