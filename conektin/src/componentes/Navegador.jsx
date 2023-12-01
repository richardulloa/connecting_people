import React from "react";
import './css/Navegador.css'
import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


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
                <div className="foto-perfil"><AccountCircleIcon fontSize="inherit"/></div>
            </section>
        </header>
    )
}

export default Navegador