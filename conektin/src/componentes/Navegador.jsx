import React from "react";
import './css/Navegador.css'
import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';


const Navegador = () => {

    return (
        <header className="navegador">
            <img className="logo-navegador" src="./logo192.png" alt="Logo" />
            <section className="barra-busqueda">
                <div className="lista">
                    <div className="label-barra"> <ListIcon /> <span className="texto-lista">Lista intereses</span> </div>
                </div>
                <div className="buscar">
                    <input id="barra" className="input-barra" type="text" placeholder="Buscar" />
                    <div className="label-barra"> <SearchIcon /> </div>
                </div>
            </section>
            <section className="perfil">
                <div className="foto-perfil"><PersonIcon fontSize="inherit"/></div>
                <div className="añadir-ruta"><AddIcon fontSize="inherit" /> <span className="añadir-ruta-text">Crear Familia</span> </div>
            </section>
        </header>
    )
}

export default Navegador