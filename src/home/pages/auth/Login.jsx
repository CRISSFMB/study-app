import React from 'react'
import ContainerAuth from './components/ContainerAuth';
import FormLogin from './components/FormLogin';

export default function Login() {
    return (
        <div className='container'>

            <ContainerAuth name={"Inicia sesión"} >
                <FormLogin />
            </ ContainerAuth >
        </div>
    )

}
