import { Routes, Route, Navigate } from 'react-router-dom';

import InicioSinLogin from '../componentes/InicioSinLogin';
import InicioConLogin from '../componentes/InicioConLogin';
import Perfil from '../componentes/Perfil';
import Alta from '../componentes/Alta'
import ProximosEventos from '../componentes/ProximosEventos';
import Evento from '../componentes/Evento';
import CrearFamilia from '../componentes/CrearFamilia';
import BuscaFamilias from '../componentes/BuscaFamilia';
import InicioSesion from '../componentes/InicioSesion';
import CerrarSesion from '../componentes/CerrarSesion';


export function Router() {

    return (
        <Routes>
            <Route path='/' element={<InicioSinLogin />} />
            <Route path='/main' element={<InicioConLogin />} />
            <Route path='/perfil' element={<Perfil/>}/>
            <Route path='/alta' element={<Alta />} />
            <Route path='/proximos-eventos' element={<ProximosEventos />} />
            <Route path='/evento/:id' element={<Evento />} />
            <Route path='/crear-familia' element={<CrearFamilia />} />
            <Route path='/busca-familia' element={<BuscaFamilias />} />
            <Route path='/login' element={<InicioSesion/>} />
            <Route path='/logout' element={<CerrarSesion/>} />
            <Route path='/*' element={<Navigate to='/'/>}/>
        </Routes>
    )
}