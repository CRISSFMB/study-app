import React from 'react'

export default function ButtonSocial({children}) {
  return (
    <button onClick={()=>console.log("Red-Social")} className='style-button'> {children}</button>
  )
}
