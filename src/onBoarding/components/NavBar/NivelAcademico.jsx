import React from 'react'
import './NivelAcademico.css'
import {Link} from 'react-router-dom'
import Icon from './Icons/CargaLlena'
import CargaLlena from './Icons/CargaLlena'
import Carga1Barra from './Icons/Carga1Barra'
import Carga3Barras from './Icons/Carga3Barras'
import Carga4Barras from './Icons/Carga4Barras'

const NivelAcademico = () => {
    return (
        <>
            <h1 className='titulo'>Las universidades de tu futura carrera según <br /> <span className='bold'>el nivel academico</span> </h1>

        <div className='grid'> 

            <div className='card'>
                <div className='cardContenido'>
                    <h2 className='cardNumero'>1</h2>
                    <h3>Ingenieria en Informatica</h3>
                </div>
                    <button className='verUniversidad'>Ver Universidad</button>
                <img className='img' src='https://i.postimg.cc/pdsZVkf1/image-30.png' alt="imagen" />
                
                <div className='cargaContainer'>
                    <CargaLlena  texto= 'Nivel Academico' />
                    <Carga1Barra texto= 'Acceso transporte publico' />
                    <Carga4Barras texto="Nivel profesor" />
                    <Carga3Barras texto= 'Ambiente'/>
                    <Carga3Barras texto='Demanda Horaria'/>
                </div>
            </div>

            <div className='card'>
                <div className='cardContenido'>
                    <h2 className='cardNumero'>1</h2>
                    <h3>Ingenieria en Informatica</h3>
                </div>
                    <button className='verUniversidad'>Ver Universidad</button>
                <img className='img' src='https://i.postimg.cc/pdsZVkf1/image-30.png' alt="imagen" />
                
                <div className='cargaContainer'>
                    <CargaLlena  texto= 'Nivel Academico' />
                    <Carga1Barra texto= 'Acceso transporte publico' />
                    <Carga4Barras texto="Nivel profesor" />
                    <Carga3Barras texto= 'Ambiente'/>
                    <Carga3Barras texto='Demanda Horaria'/>
                </div>
            </div>

            <div className='card'>
                <div className='cardContenido'>
                    <h2 className='cardNumero'>1</h2>
                    <h3>Ingenieria en Informatica</h3>
                </div>
                    <button className='verUniversidad'>Ver Universidad</button>
                <img className='img' src='https://i.postimg.cc/pdsZVkf1/image-30.png' alt="imagen" />
                
                <div className='cargaContainer'>
                    <CargaLlena  texto= 'Nivel Academico' />
                    <Carga1Barra texto= 'Acceso transporte publico' />
                    <Carga4Barras texto="Nivel profesor" />
                    <Carga3Barras texto= 'Ambiente'/>
                    <Carga3Barras texto='Demanda Horaria'/>
                </div>
            </div>

            <div className='card'>
                <div className='cardContenido'>
                    <h2 className='cardNumero'>1</h2>
                    <h3>Ingenieria en Informatica</h3>
                </div>
                    <button className='verUniversidad'>Ver Universidad</button>
                <img className='img' src='https://i.postimg.cc/pdsZVkf1/image-30.png' alt="imagen" />
                
                <div className='cargaContainer'>
                    <CargaLlena  texto= 'Nivel Academico' />
                    <Carga1Barra texto= 'Acceso transporte publico' />
                    <Carga4Barras texto="Nivel profesor" />
                    <Carga3Barras texto= 'Ambiente'/>
                    <Carga3Barras texto='Demanda Horaria'/>
                </div>
            </div>

            <div className='card'>
                <div className='cardContenido'>
                    <h2 className='cardNumero'>1</h2>
                    <h3>Ingenieria en Informatica</h3>
                </div>
                    <button className='verUniversidad'>Ver Universidad</button>
                <img className='img' src='https://i.postimg.cc/pdsZVkf1/image-30.png' alt="imagen" />
                
                <div className='cargaContainer'>
                    <CargaLlena  texto= 'Nivel Academico' />
                    <Carga1Barra texto= 'Acceso transporte publico' />
                    <Carga4Barras texto="Nivel profesor" />
                    <Carga3Barras texto= 'Ambiente'/>
                    <Carga3Barras texto='Demanda Horaria'/>
                </div>
            </div>

            <div className='card'>
                <div className='cardContenido'>
                    <h2 className='cardNumero'>1</h2>
                    <h3>Ingenieria en Informatica</h3>
                </div>
                    <button className='verUniversidad'>Ver Universidad</button>
                <img className='img' src='https://i.postimg.cc/pdsZVkf1/image-30.png' alt="imagen" />
                
                <div className='cargaContainer'>
                    <CargaLlena  texto= 'Nivel Academico' />
                    <Carga1Barra texto= 'Acceso transporte publico' />
                    <Carga4Barras texto="Nivel profesor" />
                    <Carga3Barras texto= 'Ambiente'/>
                    <Carga3Barras texto='Demanda Horaria'/>
                </div>
            </div>

        </div>

        <div className='buttonVerMas'>
            <Link className='verMas' to="NivelAcademico">Ver Mas</Link>
        </div>

        <p>ACA VA EL FOOTER!!</p>
        
    </>
    )
}

export default NivelAcademico