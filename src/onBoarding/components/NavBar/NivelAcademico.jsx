import React from 'react'
import './NivelAcademico.css'
import {Link} from 'react-router-dom'

import CargaLlena from './Icons/CargaLlena'
import Carga1Barra from './Icons/Carga1Barra'
import Carga3Barras from './Icons/Carga3Barras'
import Carga4Barras from './Icons/Carga4Barras'
import Card from '../Card'

import api from '../../../api.json'

const NivelAcademico = () => {

    return (
        <>
            <h1 className='titulo'>Las universidades de tu futura carrera según <br /> <span className='bold'>el nivel academico</span> </h1>

            <div className='grid'> 

                <div className='card'>
                    <Card indice = {api[0].indice} titulo = {api[0].titulo} url = {api[0].url}/>
                    <div className='cargaContainer'>
                        <CargaLlena  texto= {api[0].carga1} />
                        <Carga1Barra texto= {api[0].carga2}  />
                        <Carga4Barras texto={api[0].carga3}   />
                        <Carga3Barras texto= {api[0].carga4}  />
                        <Carga3Barras texto= {api[0].carga5}  />
                    </div> 
                </div>

                <div className='card'>
                    <Card indice = {api[1].indice} titulo = {api[1].titulo} url = {api[1].url} />
                    <div className='cargaContainer'>
                        <CargaLlena  texto= {api[0].carga1} />
                        <Carga3Barras texto= {api[0].carga2}  />
                        <Carga3Barras texto={api[0].carga3}   />
                        <Carga4Barras texto= {api[0].carga4}  />
                        <Carga4Barras texto= {api[0].carga5}  />
                    </div>
                </div>

                <div className='card'>
                    <Card indice = {api[2].indice} titulo = {api[2].titulo} url = {api[2].url} />

                    <div className='cargaContainer'>
                        <CargaLlena  texto= {api[0].carga1} />
                        <Carga4Barras texto= {api[0].carga2}  />
                        <Carga4Barras texto={api[0].carga3}   />
                        <Carga3Barras texto= {api[0].carga4}  />
                        <Carga3Barras texto= {api[0].carga5}  />
                    </div> 
                </div>

                <div className='card'>
                    <Card indice = {api[3].indice} titulo = {api[3].titulo} url = {api[3].url} />

                    <div className='cargaContainer'>
                        <CargaLlena  texto= {api[0].carga1} />
                        <Carga3Barras texto= {api[0].carga2}  />
                        <Carga3Barras texto={api[0].carga3}   />
                        <Carga4Barras texto= {api[0].carga4}  />
                        <Carga1Barra texto= {api[0].carga5}  />
                    </div> 
                </div>

                <div className='card'>
                    <Card indice = {api[4].indice} titulo = {api[4].titulo} url = {api[4].url} />

                    <div className='cargaContainer'>
                        <CargaLlena  texto= {api[0].carga1} />
                        <Carga4Barras texto= {api[0].carga2}  />
                        <Carga4Barras texto={api[0].carga3}   />
                        <Carga3Barras texto= {api[0].carga4}  />
                        <Carga3Barras texto= {api[0].carga5}  />
                    </div> 
                </div>

                <div className='card'>
                    <Card indice = {api[5].indice} titulo = {api[5].titulo} url = {api[5].url} />

                    <div className='cargaContainer'>
                        <CargaLlena  texto= {api[0].carga1} />
                        <Carga1Barra texto= {api[0].carga2}  />
                        <Carga1Barra texto={api[0].carga3}   />
                        <Carga3Barras texto= {api[0].carga4}  />
                        <Carga3Barras texto= {api[0].carga5}  />
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