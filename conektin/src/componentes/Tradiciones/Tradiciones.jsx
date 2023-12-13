import React, /*{useState}*/ from 'react'
import Navegador from '../Navegador';
import './css/Tradiciones.css'


function Tradiciones  ()  {
    const tradicionesEstacion = {
        Primavera: [
            {
                id: 'P1',
                name: 'Sant Jordi',
                description:'',
            },
            {
                id:'P2',
                name: 'Feria de Abril de Catalunya',
                description:'',
            },
            {
                id:'P3',
                name: '',
                description:'',
            },
        ],
        Verano: [
            {

            },
        ],
        Otoño: [
            {

            },
        ],
        Invierno: [
                {
                    id: 'P1',
                    name: 'Cagatió',
                    description:'El Tió es un tronco con cara sonriente y una barretina.Días antes llega a los hogares y los niños tienen que alimentarlos con diversas viandas hasta el día de Navidad. Entonces, el tronco se tapa con una manta y los niños lo golpean provistos de palos mientras cantan canciones populares; a la espera que el Tió “cague” muchos regalos: habitualmente, caramelos, chucherías. dulces y/o chocolatinas.“Caga Tió, Tió de Nadal! No caguis arengades que són massa salades, caga turrons que són més bons!”',
                },
                {
                    id:'P2',
                    name: 'Sant Esteve',
                    description:'',
                },
                {
                    id:'P3',
                    name: 'Reyes Magos',
                    description:'',
                },
        ],
        Cultura: [
            {

            },
        ],

    };
  //  const [selectedSeason, setSelectedSeason] = useState('Primavera');

    return (
        <div>
        < Navegador />
        <h1>Tradición y cultura catalana en la ciudad de Barcelona</h1>
        <p>Aquí encontraras, ordenadas según la estación del año, un listado y breve explicacion de cada una de ellas. También tienes otro apartado de cultura típica</p>
        <div className='barra'>
            <nav>
            <a href="#s1">Primavera</a>
            <a href="#s2">Verano</a>
            <a href="#s3">Otoño</a>
            <a href="#s4">Invierno</a>
            <a href="#s5">Cultura</a>
            </nav>
        </div>
        <main>
        {Object.entries(tradicionesEstacion).map(([estacion, tradiciones]) => (
            <div key={estacion}>
                <h2>{estacion}</h2>
                <ul>
                    {tradiciones.map((tradicion) => (
                        <li key={tradicion.id}>
                            <strong>{tradicion.name}</strong>: {tradicion.description}
                        </li>
                    ))}
                </ul>
            </div>
        ))}
        </main>
        </div>
    )
}

export default Tradiciones 
