import { Routes, Route, Navigate } from 'react-router-dom';

import InicioSinLogin from '../Componentes/InicioSinLogin';
import InicioConLogin from '../Componentes/InicioConLogin';
import Miperfil from '../componentes/Miperfil';


export function Router() {
    return (
        <Routes>
            <Route path='/' element={<InicioSinLogin />} />
            <Route path='/main' element={<InicioConLogin />} />
            <Route path= '/perfil' element={<Miperfil/>}/>
        </Routes>
    )
}