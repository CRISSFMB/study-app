import React from 'react'
import ContainerAuth from './components/ContainerAuth';
import FormRegister from './components/FormRegister';

export default function Register() {
    return (
        <div className='container'>
            <ContainerAuth name="Registrate">
               <FormRegister />
            </ ContainerAuth >
        </div>
    )
}
