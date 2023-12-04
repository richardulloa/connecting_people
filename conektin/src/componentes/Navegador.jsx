import React from "react";
import './css/Navegador.css'
import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";


const Navegador = () => {

    return (
        <header className="navegador">
            <div className="navegador-flex">
                <Link to={"/main"}><img className="logo-navegador" src="./logo192.png" alt="Logo" /></Link>
                <section className="barra-busqueda">
                    <div className="lista">
                        <div className="label-barra"> <ListIcon /> <span className="texto-lista">Intereses</span> </div>
                    </div>
                    <div className="buscar">
                        <input id="barra" className="input-barra" type="text" placeholder="Buscar" />
                        <div className="label-barra"> <SearchIcon /> </div>
                    </div>
                </section>
                <section className="perfil">
                    <Link to={"/perfil"} className="foto-perfil"><PersonIcon fontSize="inherit" /></Link>
                    <div className="añadir-ruta"><AddIcon fontSize="inherit" /> <span className="añadir-ruta-text">Crear Familia</span> </div>
                </section>
            </div>
        </header>
    )
}

export default Navegador