import React, { useEffect } from 'react'
import { getCarreras, getUniversidades } from '../../Firebase/firebase-utils'
import { Carrera } from './Carrera'

const ViewCarreras = () => {
const [carreras, setCarreras] = React.useState([])
  useEffect(() => {

    getCarreras().then((res) => {
      setCarreras(res)
      // console.log(res)
    })
   
  }, [])
  
  return (
    <div>
      <div>Header</div>
      <div>
        <h2>Carreras</h2>
        <p>Las carreras</p>
        <div>
          {carreras.map((carrera) => (
            <Carrera
              key={carrera.id}
              carrera={carrera}
            />
            
          ))}
        </div>

      </div>
      
    </div>
  )
}

export default ViewCarreras
