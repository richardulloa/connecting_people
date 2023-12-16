import React from "react";
import './css/EventosCiudad.css'
import Navegador from "../Navegador";


const EventosCiudad = () => {

    return (
        <div className="ciudad-eventos">
            <Navegador />
            <main className="webs-eventos">
                <h1 className="titulo-ciudad-eventos">Eventos Ciudad</h1>
                <p className="subtitulo-ciudad-eventos">En esta sección te presentamos diversos portales web, dond epodrás ver con detalle todo tipo de eventos que se celeberen en la ciudad condal, desde exposiciones, festivales, ferias, fiestas populares...
                    Barcelona es una ciudad en la que nunca te aburrirás.
                </p>

                <div className="enlace1">
                    <div className="webarcelona">
                        <a href="https://www.webarcelona.net/es/eventos-barcelona" target="_blank">We Barcelona</a>
                    </div>
                </div>

                <div className="enlace1">
                    <div className="Hoy Barcelona">
                        <a href="https://www.hoybarcelona.app/" target="_blank">Hoy Barcelona</a>
                    </div>
                </div>

                <div className="enlace1">
                    <div className="Barcelona ÉS Molt Més">
                        <a href="https://www.barcelonaesmoltmes.cat/" target="_blank">Barcelona es molt més</a>
                    </div>
                </div>


                <div className="enlace1">
                    <div className="GuiaBCN">
                        <a href="https://guia.barcelona.cat/es/" target="_blank">Guia Barcelona</a>
                    </div>
                </div>

                <div className="enlace1">
                    <div className="Time Out">
                        <a href="https://www.timeout.es/barcelona/es" target="_blank">Time Out</a>
                    </div>
                </div>

                <div className="enlace1">
                    <div className="Barcelona Secreta">
                        <a href="https://barcelonasecreta.com/" target="_blank">Barcelona Secreta</a>
                    </div>
                </div>

            </main >
        </div >
    )
}

export default EventosCiudad