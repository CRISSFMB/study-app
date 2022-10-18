import React from 'react'
import "./Input.css";

export default function Input({placeholder, ...rest}) {
  return (
    <input {...rest} className='auth__input-style' placeholder={placeholder} />
  )
}
