import React from 'react'
import ContainerAuth from './components/ContainerAuth';
import FormRegister from './components/FormRegister';

export default function Register() {
    return (
        <div className='auth__container'>
            <ContainerAuth name="Registrate">
               <FormRegister />
            </ ContainerAuth >
        </div>
    )
}
