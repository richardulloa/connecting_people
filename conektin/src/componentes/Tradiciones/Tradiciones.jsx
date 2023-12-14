import React from 'react'
import Navegador from '../Navegador';
import './css/Tradiciones.css'


function Tradiciones() {
    const tradicionesEstacion = {
        Cultura: [
            {
                id: 'C1',
                name: 'Castellers',
                description: 'Los castells son torres humanas (en forma de castillo), síntesis de fuerza y equilibrio, que se compone de tres partes: la piña o base; el tronco, que se levanta cuidadosamente sobre la piña; y la parte superior, formada por los participantes más jóvenes. Se miden en función de los “pisos” que tiene su tronco y del número de personas que hay en cada piso. Los Castellers tienen profundo significado cultural y simbolizan la cooperación, la solidaridad y la fuerza de la comunidad. Además, son una expresión de identidad catalana y un elemento emocionante en festivales y eventos.',
            },
            {
                id: 'C2',
                name: 'Sardanas',
                description: '',
            },
            {
                id: 'C3',
                name: 'Correfocs',
                description: '',
            },
            {
                id: 'C4',
                name: 'Fiestas de Barrio',
                description: '',
            },
        ],
        Primavera: [
            {
                id: 'P1',
                name: 'Sant Jordi',
                description: 'La celebración de Sant Jordi tiene lugar el 23 de abril. Durante este día, las calles de Cataluña se llenan de puestos de libros y rosas. La tradición es que las personas intercambien libros y rosas como regalos. Los autores firman sus libros y se realizan eventos literarios en todo el país.Las rosas rojas son el símbolo predominante, representando la sangre del dragón en la leyenda. Los libros se asocian al aniversario de la muerte de grandes escritores como Cervantes y Shakespeare, que murieron en la misma fecha según el calendario gregoriano. Sant Jordi es una celebración colorida y romántica que destaca la importancia de la literatura y el amor en la cultura catalana. La leyenda cuenta la historia de un valiente caballero llamado Jordi que, para salvar a una princesa, lucha y vence a un temible dragón. De la sangre derramada del dragón, brota una rosa que Jordi regala a la princesa como símbolo de amor y victoria.',
            },
            {
                id: 'P2',
                name: 'La Mona de Pascua',
                description: ' La Mona de Pascua es un pastel decorado con figuras de chocolate, a menudo representando personajes populares, animales o incluso figuras de la cultura catalana. Es una costumbre principalmente de padrinos a ahijados, pero también puede ser un regalo entre miembros de la familia durante las celebraciones de Semana Santa. Tiene su origen en la celebración de la Pascua cristiana. En un principio, la Mona era un pan que se bendecía en la misa de Pascua y se compartía en la comida posterior al ayuno de la Cuaresma. Con el tiempo, esta costumbre evolucionó hacia la elaboración de pasteles más elaborados.  La Mona de Pascua también está vinculada a la llegada de la primavera y al renacimiento de la naturaleza. La forma de los pasteles a menudo incluye elementos relacionados con la naturaleza, como flores, animales y figuras simbólicas.',
            },
            {
                id: 'P3',
                name: 'Sant Medir',
                description: '',
            },
            {
                id: 'P4',
                name: 'Santa Eulalia',
                description: '',
            },
            {
                id:'P5',
                name:`L'ou com balla`,
                description: ''
            }
        ],
        Verano: [
            {
                id: 'V1',
                name: 'Sant Joan',
                description: '',
            },

        ],
        Otoño: [
            {
                id: 'O1',
                name: 'La Diada',
                description: '',
            },
            {
                id: 'O2',
                name: 'La Mercé',
                description: '',
            },
        ],
        Invierno: [
            {
                id: 'I1',
                name: 'Cagatió',
                description: 'El Tió es un tronco con cara sonriente y una barretina.Días antes llega a los hogares y los niños tienen que alimentarlos con diversas viandas hasta el día de Navidad. Entonces, el tronco se tapa con una manta y los niños lo golpean provistos de palos mientras cantan canciones populares; a la espera que el Tió “cague” muchos regalos: habitualmente, caramelos, chucherías. dulces y/o chocolatinas.“Caga Tió, Tió de Nadal! No caguis arengades que són massa salades, caga turrons que són més bons!”',
            },
            {
                id: 'I2',
                name: 'Sant Esteve',
                description: '',
            },
            {
                id: 'I3',
                name: 'Reyes Magos',
                description: '',
            },
        ],

    };


    return (
        <div>
            < Navegador />
            <h1 id='title'>TRADICIÓN Y CULTURA CATALANA EN LA CIUDAD DE BARCELONA</h1>
            <p id='subtitle'>Conoce, según según la estación del año, un listado y breve explicacion de cada una de ellas. También tienes otro apartado de cultura típica</p>
            <div className='barra'>
                <nav id='barrita'>
                    <a href='#Cultura'>Cultura</a>
                    <a href='#Primavera'>Primavera</a>
                    <a href='#Verano'>Verano</a>
                    <a href='#Otoño'>Otoño</a>
                    <a href='#Invierno'>Invierno</a>

                </nav>
            </div>
            <main id='tradiciones'>
                {Object.entries(tradicionesEstacion).map(([estacion, tradiciones]) => (
                    <div key={estacion}  id='contenedor'>
                        <h2>{estacion}</h2>
                        <div>
                            <ul>
                                {tradiciones.map((tradicion, index) => (
                                    <li key={index} id={tradicion.id}>
                                        <strong className='titulos'>{tradicion.name}</strong>
                                        <p className='texto'>{tradicion.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                ))}
            </main>
        </div>
    )
}

export default Tradiciones 
