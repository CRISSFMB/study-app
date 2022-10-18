import React from 'react'
import './NivelAcademico.css'
import {Link} from 'react-router-dom'

import CargaLlena from './Icons/CargaLlena'
import Carga1Barra from './Icons/Carga1Barra'
import Carga3Barras from './Icons/Carga3Barras'
import Carga4Barras from './Icons/Carga4Barras'
import Card from '../Card'
import NavBar from './NavBar'

const NivelAcademico = () => {
    return (
        <>
            <h1 className='titulo'>Las universidades de tu futura carrera según <br /> <span className='bold'>el nivel academico</span> </h1>

            <div className='grid'> 

                <div className='card'>
                    <Card 
                        indice = '1' 
                        titulo = 'Ingenieria en informatica' 
                        url = 'https://i.postimg.cc/pdsZVkf1/image-30.png'
                        carga = 'CargaLlena'
                    />

                    <div className='cargaContainer'>
                        <CargaLlena  texto= 'Nivel Academico' />
                        <Carga1Barra texto= 'Acceso transporte publico' />
                        <Carga4Barras texto="Nivel profesor" />
                        <Carga3Barras texto= 'Ambiente'/>
                        <Carga3Barras texto='Demanda Horaria'/>
                    </div> 
                </div>

                <div className='card'>
                    <Card 
                        indice = '1' 
                        titulo = 'Ingenieria en informatica' 
                        url = 'https://i.postimg.cc/pdsZVkf1/image-30.png'
                        carga = 'CargaLlena'
                    />

                    <div className='cargaContainer'>
                        <CargaLlena  texto= 'Nivel Academico' />
                        <Carga1Barra texto= 'Acceso transporte publico' />
                        <Carga4Barras texto="Nivel profesor" />
                        <Carga3Barras texto= 'Ambiente'/>
                        <Carga3Barras texto='Demanda Horaria'/>
                    </div> 
                </div>

                <div className='card'>
                    <Card 
                        indice = '1' 
                        titulo = 'Ingenieria en informatica' 
                        url = 'https://i.postimg.cc/pdsZVkf1/image-30.png'
                        carga = 'CargaLlena'
                    />

                    <div className='cargaContainer'>
                        <CargaLlena  texto= 'Nivel Academico' />
                        <Carga1Barra texto= 'Acceso transporte publico' />
                        <Carga4Barras texto="Nivel profesor" />
                        <Carga3Barras texto= 'Ambiente'/>
                        <Carga3Barras texto='Demanda Horaria'/>
                    </div> 
                </div>

                <div className='card'>
                    <Card 
                        indice = '1' 
                        titulo = 'Ingenieria en informatica' 
                        url = 'https://i.postimg.cc/pdsZVkf1/image-30.png'
                        carga = 'CargaLlena'
                    />

                    <div className='cargaContainer'>
                        <CargaLlena  texto= 'Nivel Academico' />
                        <Carga1Barra texto= 'Acceso transporte publico' />
                        <Carga4Barras texto="Nivel profesor" />
                        <Carga3Barras texto= 'Ambiente'/>
                        <Carga3Barras texto='Demanda Horaria'/>
                    </div> 
                </div>

                <div className='card'>
                    <Card 
                        indice = '1' 
                        titulo = 'Ingenieria en informatica' 
                        url = 'https://i.postimg.cc/pdsZVkf1/image-30.png'
                        carga = 'CargaLlena'
                    />

                    <div className='cargaContainer'>
                        <CargaLlena  texto= 'Nivel Academico' />
                        <Carga1Barra texto= 'Acceso transporte publico' />
                        <Carga4Barras texto="Nivel profesor" />
                        <Carga3Barras texto= 'Ambiente'/>
                        <Carga3Barras texto='Demanda Horaria'/>
                    </div> 
                </div>

                <div className='card'>
                    <Card 
                        indice = '1' 
                        titulo = 'Ingenieria en informatica' 
                        url = 'https://i.postimg.cc/pdsZVkf1/image-30.png'
                        carga = 'CargaLlena'
                    />

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
                <Link className='verMas' to="/homeScreen">Regresar</Link>
            </div>

           
        </>
    )
}

export default NivelAcademico