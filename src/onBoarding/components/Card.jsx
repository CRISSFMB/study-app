const Card = ({indice, titulo ,url }) => {
    return (
        <>
            <div className='cardContenido'>
                <h2 className='cardNumero'>{indice}</h2>
                <h3>{titulo}</h3>
            </div>
                <button className='verUniversidad'>Ver Universidad</button>
            <img className='img' src={url}alt="imagen" />
        </>
                
    )
}

export default Card