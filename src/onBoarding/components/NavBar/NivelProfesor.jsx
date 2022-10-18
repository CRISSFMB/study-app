import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const NivelProfesor = () => {
  return (
    <>
      <h1 className='titulo'>Las universidades de tu futura carrera según <br /> <span className='bold'>el nivel de profesores</span> </h1>

      <div className='buttonVerMas'>
        <Link className='verMas' to="/homeScreen">Regresar</Link>
      </div>
    </>
  )
}

export default NivelProfesor