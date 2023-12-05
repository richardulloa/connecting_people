import { Routes, Route, Navigate } from 'react-router-dom';

import InicioSinLogin from '../componentes/InicioSinLogin';
import InicioConLogin from '../componentes/InicioConLogin';
import Miperfil from '../componentes/Miperfil';
import Alta from '../componentes/Alta'
import ProximosEventos from '../componentes/ProximosEventos';
import Evento from '../componentes/Evento';
import CrearFamilia from '../componentes/CrearFamilia';


export function Router() {
    return (
        <Routes>
            <Route path='/' element={<InicioSinLogin />} />
            <Route path='/main' element={<InicioConLogin />} />
            <Route path='/perfil' element={<Miperfil/>}/>
            <Route path='/alta' element={<Alta />} />
            <Route path='/proximos-eventos' element={<ProximosEventos />} />
            <Route path='/evento' element={<Evento />} />
            <Route path='/crear-familia' element={<CrearFamilia />} />
        </Routes>
    )
}