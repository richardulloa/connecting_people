import React from "react";
import './css/EventosCiudad.css'
import Navegador from "../Navegador";


const EventosCiudad = () => {

    return (
        <div className="ciudad-eventos">
            <Navegador />
            <main className="body-webs">
               
                <header className="encabezado-ciudad">
                <h1 className="titulo-ciudad-eventos">Eventos Ciudad</h1>
                <p className="subtitulo-ciudad-eventos">En esta sección te presentamos diversos portales web,  en los cuales podrás ver con detalle todo tipo de eventos que se celeberen en la ciudad condal, desde exposiciones, festivales, ferias, fiestas populares...
                    Barcelona es una ciudad en la que nunca te aburrirás.
                </p>
                </header>
                

                <div className="contener-webs">
                    <div className="webs-eventos">
                        <div>
                            <a  className='nombre-web' href="https://www.timeout.es/barcelona/es" target="_blank">Time Out</a>
                        </div>

                        <div className="detalle-web1">
                            <div className="foto-web">
                                <img src="./img/EventosCiudad/bcnmoltmes.jpg" alt="Time Out"></img>
                            </div>
                            <div className="resumen-web">
                                <p>"Time out" es una conocida marca que opera en el ámbito de guías y contenido relacionado con entretenimiento, cultura, eventos y restaurantes en varias ciudades alrededor del mundo. Estas guías incluyen información sobre eventos, restaurantes, bares, actividades culturales, y otras opciones de entretenimiento.
                                Además publica noticias, artículos y contenido editorial relacionado con la cultura, el entretenimiento, los viajes y más.
                                También cuentan con el formato revista.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="webs-eventos">
                        <div>
                            <a className='nombre-web' href="https://barcelonasecreta.com/" target="_blank">Barcelona Secreta</a>
                        </div>

                        <div className="detalle-web2"><div className="foto-web">
                            <img src="./img/EventosCiudad/bcnmoltmes.jpg" alt="Barcelona Secreta"></img>
                        </div>
                            <div className="resumen-web">
                                <p>Los bares que hay que probar antes de morir o las exposiciones más interesantes de cada mes. Barcelona Secreta te cuenta todo lo que ofrece nuestra ciudad.
                                Esta es tu guía tanto si quieres saber cual es el restaurante del que todo el mundo habla como si te interesa la historia que ocultan las flores que decoran los adoquines de la ciudad. Formado por periodistas que escriben de arquitectura, de cine, de literatura, de comida y más.
                                También informan de la última hora de la ciudad y te informamos de los cortes de tráfico que te afectan, los nuevos parques que abren o la temperatura de los próximos días.</p>
                            </div>
                        </div>

                    </div>

                    <div className="webs-eventos1">
                        <div >
                            <a className='nombre-web' href="https://feverup.com/es/barcelona" target="_blank">Fever</a>
                        </div>

                        <div className="detalle-web1">
                            <div className="foto-web">
                                <img src="./img/EventosCiudad/fever.jpg" alt="Fever"></img>
                            </div>
                            <div className="resumen-web">
                                <p>Lo diferenciador de Fever es que cuent acon una interfaz mucho más directa donde te aparecen segun categorías los eventos que se celebrarán próximamente. Además también puedes descargarte su app gratuita y tenerlo a mano en el móvil siempre.</p>
                            </div>
                        </div>

                    </div>

                    <div className="webs-eventos">
                        <div>
                            <a className='nombre-web' href="https://www.hoybarcelona.app/" target="_blank">Hoy Barcelona</a>
                        </div>
                        <div className="detalle-web2">
                            <div className="foto-web">
                                <img src="./img/EventosCiudad/hoybcn.jpg" alt="Hoy BCN"></img>
                            </div>
                            <div className="resumen-web">
                                <p>En Hoy Barcelona vas a encontrar un montón de actividades de ocio y cultura relacionadas con la provincia de Barcelona. Y, además, puedes descargarte su aplicación móvil gratuita para ver en todo momento qué eventos tienes muy cerca de ti y así sacarle el máximo partido a la ciudad.</p>
                            </div>
                        </div>
                    </div>


                    <div className="webs-eventos">
                        <div>
                            <a className='nombre-web' href="https://www.barcelonaesmoltmes.cat/" target="_blank">Barcelona es molt més</a>
                        </div>
                        <div className="detalle-web1">
                            <div className="foto-web">
                                <img src="./img/EventosCiudad/bcnmoltmes.jpg" alt="BCN es molt mes"></img>
                            </div>
                            <div className="resumen-web">
                                <p>Esta es la página oficila de promoción turística de la Diputació de Barcelona. En esta web encontrarás mil ideas para descubrir las comarcas barcelonesas, así que aprovecha y descubre que hay fuera de la ciudad. Creemos que esta es la mejor web para encontrar otro tipo de turismo mucho más sostenible. Cuentan con un boletín al que puedes suscribirte</p>
                            </div>
                        </div>

                    </div>

                    <div className="webs-eventos">
                        <div>
                            <a className='nombre-web' href="https://guia.barcelona.cat/es/" target="_blank">Guía BCN</a>
                        </div>

                        <div className="detalle-web2">
                        <div className="foto-web">
                            <img src="./img/EventosCiudad/guiabcn.jpg" alt="Guía BCN"></img>
                        </div>
                        <div className="resumen-web">
                            <p>Guía BCN está gestionada directamente por el Ajuntament de Barcelona, por lo que la ventaja de esta web, es que tienes todo tipo de información. En ella encontrarás más de 30.000 entidades y equipamientos, 2.000 actividades y 1.000 cursos a tu alcance. No puedes dejar de echarle un ojo si eres nuevo en la ciudad. </p>
                        </div>
                        </div>
                      
                    </div>
                </div>

            </main >
        </div>
    )
}

export default EventosCiudad