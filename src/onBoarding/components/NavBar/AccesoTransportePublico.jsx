import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../Card'
import api from '../../../api.json'
import CargaLlena from './Icons/CargaLlena'
import Carga1Barra from './Icons/Carga1Barra'
import Carga4Barras from './Icons/Carga4Barras'
import Carga3Barras from './Icons/Carga3Barras'

const AccesoTransportePublico = () => {
  return (
    <>
      <h1 className='titulo'>Las universidades de tu futura carrera según <br /> <span className='bold'>el acceso al transporte publico</span> </h1>
      
      <div className='grid'> 

        <div className='card'>
          <Card indice = {api[0].indice} titulo = {api[6].titulo} url = {api[6].url}/>
            <div className='cargaContainer'>
              <CargaLlena  texto= {api[0].carga1} />
              <CargaLlena texto= {api[0].carga2}  />
              <Carga4Barras texto={api[0].carga3}   />
              <Carga3Barras texto= {api[0].carga4}  />
              <Carga3Barras texto= {api[0].carga5}  />
            </div> 
        </div>

        <div className='card'>
          <Card indice = {api[0].indice} titulo = {api[5].titulo} url = {api[1].url}/>
            <div className='cargaContainer'>
              <CargaLlena  texto= {api[0].carga1} />
              <Carga1Barra texto= {api[0].carga2}  />
              <Carga4Barras texto={api[0].carga3}   />
              <Carga3Barras texto= {api[0].carga4}  />
              <Carga3Barras texto= {api[0].carga5}  />
            </div> 
        </div>

        <div className='card'>
          <Card indice = {api[0].indice} titulo = {api[4].titulo} url = {api[3].url}/>
            <div className='cargaContainer'>
              <CargaLlena  texto= {api[0].carga1} />
              <Carga1Barra texto= {api[0].carga2}  />
              <Carga4Barras texto={api[0].carga3}   />
              <Carga3Barras texto= {api[0].carga4}  />
              <Carga3Barras texto= {api[0].carga5}  />
            </div> 
        </div>

        <div className='card'>
          <Card indice = {api[0].indice} titulo = {api[3].titulo} url = {api[4].url}/>
            <div className='cargaContainer'>
              <CargaLlena  texto= {api[0].carga1} />
              <Carga1Barra texto= {api[0].carga2}  />
              <Carga4Barras texto={api[0].carga3}   />
              <Carga3Barras texto= {api[0].carga4}  />
              <Carga3Barras texto= {api[0].carga5}  />
            </div> 
        </div>

        <div className='card'>
          <Card indice = {api[0].indice} titulo = {api[2].titulo} url = {api[2].url}/>
            <div className='cargaContainer'>
              <CargaLlena  texto= {api[0].carga1} />
              <Carga1Barra texto= {api[0].carga2}  />
              <Carga4Barras texto={api[0].carga3}   />
              <Carga3Barras texto= {api[0].carga4}  />
              <Carga3Barras texto= {api[0].carga5}  />
            </div> 
        </div>

        <div className='card'>
          <Card indice = {api[0].indice} titulo = {api[1].titulo} url = {api[5].url}/>
            <div className='cargaContainer'>
              <CargaLlena  texto= {api[0].carga1} />
              <Carga1Barra texto= {api[0].carga2}  />
              <Carga4Barras texto={api[0].carga3}   />
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

export default AccesoTransportePublico