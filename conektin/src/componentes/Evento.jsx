import React from "react";
import "./css/Evento.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupsIcon from '@mui/icons-material/Groups';
import Navegador from "./Navegador";


const Evento = () => {
    return (
        <div className='evento'>
            <Navegador />
            <div className="evento-box-flex">
                <div className="evento-info">
                    <h1 className="titulo-evento">Nombre Evento</h1>
                    <p><GroupsIcon fontSize="inherit" />Nombre familia</p>
                    <section className="caja-evento">
                        <img className="imagen-evento" src="./img/bbq1.jpeg" alt="" />
                        <div className="caja-evento-info">
                            <p><CalendarMonthIcon fontSize="inherit" />19/08/2024</p>
                            <p><LocationOnIcon fontSize="inherit" />Ubicación</p>
                            <section className="miembros-evento">
                                <h3>Miembros</h3>

                            </section>
                        </div>
                    </section>
                    <h3 className="titulo-descripcion-evento">Descripcion</h3>
                    <p className="descripcion-evento">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi pariatur autem voluptates, voluptatibus laboriosam quo libero odit. Deleniti eum rerum et, minus ab similique, error cum, illum autem delectus sint.</p>
                </div>
                <div className="mapa-evento">
                    MAPA
                </div>
            </div>
        </div>
    );
}

export default Evento;
