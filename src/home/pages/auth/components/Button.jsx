import React from 'react'
import "./Button.css";


export default function Button({background,onclick, color, children}) {
    const styleB ={
        backgroundColor: background,
        color: color,   
    }

  return (       
                
    <button onClick={onclick} className='auth__button' style={styleB}  
    type="submit">{children}</button>

  )
}
