import React from 'react'
import "./Input.css";

export default function Input({placeholder}) {
  return (
    <input className='auth__input-style' placeholder={placeholder} />
  )
}
