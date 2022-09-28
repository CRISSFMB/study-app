import React from 'react'

const CargaLlena = ({texto}) => {

  return (
    <>
      <div className='cargador'>
        <div className='cargaAzul'></div>
        <div className='cargaAzul'></div> 
        <div className='cargaAzul'></div>
        <div className='cargaAzul'></div>
        <div className='cargaAzul'></div> 
          <div className='cargaContainerText'>
              <p className='cargaTexto'>{texto}</p>   
          </div>
      </div>
    </>
  )
}

export default CargaLlena  