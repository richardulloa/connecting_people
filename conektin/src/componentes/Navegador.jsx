import React, { useState } from "react";
import './css/Navegador.css'
import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";


const Navegador = () => {

    const [menu, setMenu] = useState(false)

    return (
        <header className="navegador">
            <div className="navegador-flex">
                <Link to={"/main"}><img className="logo-navegador" src="./logo192.png" alt="Logo" /></Link>
                <section className="barra-busqueda">
                    <div className="lista">
                        <div onClick={() => setMenu(!menu)} className="label-barra"> <ListIcon /> <span className="texto-lista">Menu</span> </div>
                    </div>
                    <div className="buscar">
                        <input id="barra" className="input-barra" type="text" placeholder="Buscar" />
                        <div className="label-barra"> <SearchIcon /> </div>
                    </div>
                </section>
                <section className="perfil">
                    <Link to={"/perfil"} className="foto-perfil"><PersonIcon fontSize="inherit" /></Link>
                    <Link to={"/crear-familia"} className="crear-familia"><AddIcon fontSize="inherit" /> <span className="crear-familia-text">Crear Familia</span></Link>
                </section>
            </div>
            <div className={`menu ${menu ? 'open' : ''}`}>
                <ul>
                    <li><Link to={"/proximos-eventos"}>Proximos Eventos</Link></li>
                    <li><Link to={"/"}>Busca una Familia</Link></li>
                    <li><Link to={"/"}>Eventos Ciudad</Link></li>
                    <li><Link to={"/"}>Tradiciones Ciudad</Link></li>
                    <li><Link to={"/"}>Evento Cercano</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Navegador