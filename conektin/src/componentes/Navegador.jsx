import React, { useContext, useEffect, useState } from "react";
import './css/Navegador.css'
import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import Contexto from "../context/Contexto";


const Navegador = () => {

    const { usuario } = useContext(Contexto)

    const [menu, setMenu] = useState(false)
    const [interesBus, setInteresBus] = useState("")

    return (
        <header className="navegador">
            <div className="navegador-flex">
                <Link to={"/main"}><img className="logo-navegador" src="../logo512.png" alt="Logo" /></Link>
                <section className="barra-busqueda">
                    <div className="lista">
                        <div onClick={() => setMenu(!menu)} className="label-barra"> <ListIcon /> <span className="texto-lista">Menu</span> </div>
                    </div>
                    <div className="buscar">
                        <input id="barra" className="input-barra" type="text" value={interesBus} placeholder="Buscar interes" onChange={(interes) => setInteresBus(interes.target.value)} />
                        <Link to={`/busqueda/interes+${interesBus}`} onClick={() => setInteresBus("")} className="label-barra"> <SearchIcon /> </Link>

                    </div>
                </section>
                <section className="perfil">
                    <Link to={"/crear-familia"} className="crear-familia"><AddIcon fontSize="inherit" /> <span className="crear-familia-text">Crear Familia</span></Link>
                    {
                        usuario &&
                        <Link to={`/perfil/${usuario.idusuario}`} className="foto-perfil"><PersonIcon fontSize="inherit" /></Link>
                    }
                    <Link to={"/logout"} className="foto-perfil"><LogoutIcon fontSize="inherit" /></Link>
                </section>
            </div>

            <div className={`menu ${menu ? 'open' : ''}`}>
                <ul className="openedMenu">
                    <li><Link to={"/proximos-eventos"}>Proximos Eventos</Link></li>
                    <li><Link to={"/busca-familia"}>Busca una Familia</Link></li>
                    <li><Link to={"/eventosciudad"}>Eventos Ciudad</Link></li>
                    <li><Link to={"/tradiciones"}>Tradiciones Ciudad</Link></li>
                    <li><Link to={"/eventosintereses"}>Eventos para ti</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Navegador