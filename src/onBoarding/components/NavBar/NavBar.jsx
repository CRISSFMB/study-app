import React from 'react'
import {Link} from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
    
    return (
        <>
            <h2 className='tituloMenu'>Elegi tu universidad segun tu:</h2>
            <header>
                <nav>
                    <ul>
                        <Link className='niveles' to="NivelAcademico">Nivel Academico</Link>
                        <Link className='niveles'  to="AccesoTransporte">Acceso transporte publico</Link>
                        <Link className='niveles'  to="NivelProfesor">Nivel del Profesor</Link>
                        <Link className='niveles'  to="Ambiente">Ambiente</Link>
                        <Link className='niveles' to="DemandaHoraria">Demanda Horaria</Link>
                    </ul>
                </nav>
            </header>
         
        </>
        
    )
}

export default NavBar