import React from "react";
import './css/InicioConLogin.css'
import Navegador from "../Navegador";
import { Link } from "react-router-dom";
import Footer from "../Footer";


const InicioConLogin = () => {

    return (
        <div className="contenido-inicio">
            <Navegador />
            <main className="contenido">
                <Link to={"/proximos-eventos"} className="secciones proximos-eventos">
                    <div className="caja">
                        <div className="image pe"></div>
                        <div className="overlay">
                            <p className="text">Proximos Eventos</p>
                        </div>
                    </div>
                </Link>

                <Link to={"/busca-familia"} className="secciones busca-familia">
                    <div className="caja">
                        <div className="image bf"></div>
                        <div className="overlay">
                            <p className="text">Busca una familia</p>
                        </div>
                    </div>
                </Link>
                
                <section className="eventos-familias">
                    <Link to={"/eventosciudad"} className="secciones eventos-ciudad ">
                        <div className="caja">
                            <div className="image ec"></div>
                            <div className="overlay">
                                <p className="text">Eventos Ciudad</p>
                            </div>
                        </div>
                    </Link>
                    
                    <Link to={"/tradiciones"} className="secciones tradiciones">
                        <div className="caja">
                            <div className="image tc"></div>
                            <div className="overlay">
                                <p className="text">Tradiciones Ciudad</p>
                            </div>
                        </div>
                    </Link>
                </section>

                <Link to={"/eventosintereses"} className="secciones evento-cercano">
                    <div className="caja">
                        <div className="image evc"></div>
                        <div className="overlay">
                            <p className="text">Eventos para ti</p>
                        </div>
                    </div>
                </Link>


            </main>
            <Footer />
        </div>
    )
}

export default InicioConLogin