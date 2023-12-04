import React from "react";
import "./css/Evento.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Navegador from "./Navegador";

const Evento = () => {
    return (
        <div className='evento'>
            <Navegador />
            <div className="evento-info">
                <h1 className="titulo-evento">Nombre Evento</h1>
                <section className="">
                    <img className="imagen-evento" src="./img/bbq1.jpeg" alt="" />
                    
                </section>
                <h3 className="titulo-descripcion-evento">Descripcion</h3>
                <p className="descripcion-evento">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi pariatur autem voluptates, voluptatibus laboriosam quo libero odit. Deleniti eum rerum et, minus ab similique, error cum, illum autem delectus sint.</p>
            </div>
        </div>
    );
}

export default Evento;
