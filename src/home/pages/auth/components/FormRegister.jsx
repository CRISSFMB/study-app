import React from 'react'
import Button from './Button'
import Input from './Input'
import check from "../../../../assets/onboarding-assets/Check.svg"
export default function FormRegister() {


    return (
        <>
            <form className='form'>

                <label>
                    <p className='name-label'>
                        Nombre y apellido
                    </p>
                    <div className='contenedor-input-check'>
                        <Input placeholder={"Juan Perez"} />
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.1203 8.10675L11.3337 16.8934L6.54699 12.1201L4.66699 14.0001L11.3337 20.6667L22.0003 10.0001L20.1203 8.10675ZM14.0003 0.666748C6.64033 0.666748 0.666992 6.64008 0.666992 14.0001C0.666992 21.3601 6.64033 27.3334 14.0003 27.3334C21.3603 27.3334 27.3337 21.3601 27.3337 14.0001C27.3337 6.64008 21.3603 0.666748 14.0003 0.666748ZM14.0003 24.6667C8.10699 24.6667 3.33366 19.8934 3.33366 14.0001C3.33366 8.10675 8.10699 3.33341 14.0003 3.33341C19.8937 3.33341 24.667 8.10675 24.667 14.0001C24.667 19.8934 19.8937 24.6667 14.0003 24.6667Z" fill="#A8BBBF" />
                        </svg>
                    </div>
                </label>

                <label>
                    <p className='name-label'>
                        Dirección de correo electrónico
                    </p>
                    <div className='contenedor-input-check'>
                        <Input placeholder={"nombre@mail.com"} />
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.1203 8.10675L11.3337 16.8934L6.54699 12.1201L4.66699 14.0001L11.3337 20.6667L22.0003 10.0001L20.1203 8.10675ZM14.0003 0.666748C6.64033 0.666748 0.666992 6.64008 0.666992 14.0001C0.666992 21.3601 6.64033 27.3334 14.0003 27.3334C21.3603 27.3334 27.3337 21.3601 27.3337 14.0001C27.3337 6.64008 21.3603 0.666748 14.0003 0.666748ZM14.0003 24.6667C8.10699 24.6667 3.33366 19.8934 3.33366 14.0001C3.33366 8.10675 8.10699 3.33341 14.0003 3.33341C19.8937 3.33341 24.667 8.10675 24.667 14.0001C24.667 19.8934 19.8937 24.6667 14.0003 24.6667Z" fill="#A8BBBF" />
                        </svg>
                    </div>

                </label>


                <label>
                    <p className='name-label'>
                        Nombre de usuario
                    </p>
                    <div className='contenedor-input-check'>
                        <Input placeholder={"Juan"} />
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.1203 8.10675L11.3337 16.8934L6.54699 12.1201L4.66699 14.0001L11.3337 20.6667L22.0003 10.0001L20.1203 8.10675ZM14.0003 0.666748C6.64033 0.666748 0.666992 6.64008 0.666992 14.0001C0.666992 21.3601 6.64033 27.3334 14.0003 27.3334C21.3603 27.3334 27.3337 21.3601 27.3337 14.0001C27.3337 6.64008 21.3603 0.666748 14.0003 0.666748ZM14.0003 24.6667C8.10699 24.6667 3.33366 19.8934 3.33366 14.0001C3.33366 8.10675 8.10699 3.33341 14.0003 3.33341C19.8937 3.33341 24.667 8.10675 24.667 14.0001C24.667 19.8934 19.8937 24.6667 14.0003 24.6667Z" fill="#A8BBBF" />
                        </svg>
                    </div>
                </label>
                <label>
                    <p className='name-label'>
                        Contraseña
                    </p>
                    <div className='contenedor-input-check'>
                        <Input placeholder={"8 caracteres (1 mayúscula - 1 número)"} />
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.1203 8.10675L11.3337 16.8934L6.54699 12.1201L4.66699 14.0001L11.3337 20.6667L22.0003 10.0001L20.1203 8.10675ZM14.0003 0.666748C6.64033 0.666748 0.666992 6.64008 0.666992 14.0001C0.666992 21.3601 6.64033 27.3334 14.0003 27.3334C21.3603 27.3334 27.3337 21.3601 27.3337 14.0001C27.3337 6.64008 21.3603 0.666748 14.0003 0.666748ZM14.0003 24.6667C8.10699 24.6667 3.33366 19.8934 3.33366 14.0001C3.33366 8.10675 8.10699 3.33341 14.0003 3.33341C19.8937 3.33341 24.667 8.10675 24.667 14.0001C24.667 19.8934 19.8937 24.6667 14.0003 24.6667Z" fill="#A8BBBF" />
                        </svg>
                    </div>
                </label>
                <label>
                    <p className='name-label'>
                        Confirmar contraseña
                    </p>
                    <div className='contenedor-input-check'>
                        <Input
                            placeholder={"8 caracteres (1 mayúscula - 1 número)"} />
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.1203 8.10675L11.3337 16.8934L6.54699 12.1201L4.66699 14.0001L11.3337 20.6667L22.0003 10.0001L20.1203 8.10675ZM14.0003 0.666748C6.64033 0.666748 0.666992 6.64008 0.666992 14.0001C0.666992 21.3601 6.64033 27.3334 14.0003 27.3334C21.3603 27.3334 27.3337 21.3601 27.3337 14.0001C27.3337 6.64008 21.3603 0.666748 14.0003 0.666748ZM14.0003 24.6667C8.10699 24.6667 3.33366 19.8934 3.33366 14.0001C3.33366 8.10675 8.10699 3.33341 14.0003 3.33341C19.8937 3.33341 24.667 8.10675 24.667 14.0001C24.667 19.8934 19.8937 24.6667 14.0003 24.6667Z" fill="#A8BBBF" />
                        </svg>
                    </div>
                </label>

                <div className='container-buttons'>
                    <Button background={"#011826"} color={"#FFFFFF"}>
                        Iniciar sesión
                    </ Button>
                    <Button background={"#FFFFFF"} color={"#011826"}>
                        Registrarme
                    </ Button>

                </div>
            </form>

        </>
    )
}
