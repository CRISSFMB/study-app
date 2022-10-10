import React from 'react'

export default function ButtonSocial({children, onclick}) {
  return (
    <button onClick={onclick} className='auth__style-button auth__style-input-social'> {children}</button>
  )
}
