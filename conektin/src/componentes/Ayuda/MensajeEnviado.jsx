import React from 'react'
import './css/MensajeEnviado.css'
import { Link } from 'react-router-dom';

function MensajeEnviado() {
  return (
    <div className='body-ayuda'>
        <header className='cabezera-ayuda'>
        <div>
                    <Link to={"/"}><img src="../logo512.png" alt="logo" /></Link>
                    <Link to={"/alta"} className='inicioSesion'>Registrate</Link>
                </div>
        </header>
        <main className='mensaje-enviado'>
        <h2>Mensaje Enviado con Éxito</h2>
    <p>¡Gracias por ponerte en contacto con nosotros! Tu mensaje se ha enviado correctamente.</p>
        </main>
  </div>
);
};

export default MensajeEnviado
