import React from 'react'
import { Link } from 'react-router-dom'

const Ambiente = () => {
    return (
        <>
            <h1 className='titulo'>Las universidades de tu futura carrera según <br /> <span className='bold'>el ambiente</span> </h1>
            
            <div className='buttonVerMas'>
                <Link className='verMas' to="/homeScreen">Regresar</Link>
            </div>
        </>
    )
}

export default Ambiente