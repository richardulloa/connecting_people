import React from "react";
import "./css/VisualizarEvento.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const VisualizarEvento = () => {
    return (
        <div className='contenido-evento'>
            <div className="flex-evento">
                <img src="../img/bbq1.jpeg" alt="Imagen prueba" />
                <section className="info-inicial">
                    <h3>Barbacoa</h3>
                    <h3><span className="nombre-familia">Nombre familia</span></h3>

                    <p>Nombre organizador</p>
                </section>
            </div>
            <section className="info-adicional">
                <p><CalendarMonthIcon /><span>19/08/2024</span></p>
                <p><LocationOnIcon />Ubicación</p>
            </section>
        </div>
    );
}

export default VisualizarEvento;
