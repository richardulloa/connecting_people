import { Routes, Route, Navigate } from 'react-router-dom';

import InicioSinLogin from '../componentes/Inicio/InicioSinLogin';
import InicioSesion from '../componentes/Formularios/InicioSesion';
import CerrarSesion from '../componentes/Formularios/CerrarSesion';
import InicioConLogin from '../componentes//Inicio/InicioConLogin';
import Perfil from '../componentes/Perfil';
import Alta from '../componentes/Formularios/Alta'
import ProximosEventos from '../componentes/Eventos/ProximosEventos';
import Evento from '../componentes/Eventos/Evento';
import CrearFamilia from '../componentes/Formularios/CrearFamilia';
import BuscaFamilias from '../componentes/Familias/BuscaFamilia';
import CrearEvento from '../componentes/Formularios/CrearEvento';
import Familia from '../componentes/Familias/Familia';
import Tradiciones from '../componentes/Tradiciones/Tradiciones';
import EventosCiudad from '../componentes/EventosCiudad/EventosCiudad';
import Ayuda from '../componentes/Ayuda/Ayuda';
import BusquedaInteres from '../componentes/Intereses/BusquedaInteres';
import EventosIntereses from '../componentes/Eventos/EventosIntereses';
import MensajeEnviado from '../componentes/Ayuda/MensajeEnviado';


export function Router() {

    return (
        <Routes>
            <Route path='/' element={<InicioSinLogin />} />
            <Route path='/login' element={<InicioSesion />} />
            <Route path='/logout' element={<CerrarSesion />} />
            <Route path='/main' element={<InicioConLogin />} />
            <Route path='/perfil/:id' element={<Perfil />} />
            <Route path='/alta' element={<Alta />} />
            <Route path='/proximos-eventos' element={<ProximosEventos />} />
            <Route path='/evento/:id' element={<Evento />} />
            <Route path='/crear-familia' element={<CrearFamilia />} />
            <Route path='/busca-familia' element={<BuscaFamilias />} />
            <Route path='/crear-evento/:idfamilia' element={<CrearEvento />} />
            <Route path='/familia/:id' element={<Familia />} />
            <Route path='/tradiciones' element={<Tradiciones />} />
            <Route path='/eventosciudad' element={<EventosCiudad />} />
            <Route path='/ayuda' element={<Ayuda />} />
            <Route path='/busqueda/:nombre' element={<BusquedaInteres />} />
            <Route path='/eventosintereses' element={<EventosIntereses />} />
            <Route path='/*' element={<Navigate to='/' />} />
            <Route path='/ayuda/mensajeenviado' element={<MensajeEnviado />} />
        </Routes>
    )
}