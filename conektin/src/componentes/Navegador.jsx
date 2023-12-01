import React from "react";
import './css/Navegador.css'
import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';


const Navegador = () => {

    return (
        <nav className="navegador">
            <img className="logo-navegador" src="./logo192.png" alt="Logo" />
            <section className="barra-busqueda">
                <div className="lista">
                    <div className="label-barra"> <ListIcon /> <span>Lista intereses</span> </div>
                </div>
                <div className="buscar">
                    <input id="barra" className="input-barra" type="text" placeholder="Buscar" />
                    <div className="label-barra"> <SearchIcon /> </div>
                </div>
            </section>
            <h1>ESTO ES NAVEGADOR</h1>
        </nav>
    )
}

export default Navegador