import React from 'react'

const Carga4Barras = ({texto}) => {
    return (
        <>
            <div className='cargador'>
                <div className='cargaTransparente'></div>
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

export default Carga4Barras