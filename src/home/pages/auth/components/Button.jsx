import React from 'react'
import "./Button.css";


export default function Button({background, color, children}) {
    const styleB ={
        backgroundColor: background,
        color: color,
                
    }
  return (       
                
    <button className='button-auth' style={styleB}  type="submit">{children}</button>

  )
}
