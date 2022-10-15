import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import swal from "sweetalert2";
import Button from './Button';
import ButtonSocial from './ButtonSocial';
import Input from './Input';
import { Formik, Form, Field } from 'formik';
import Salto from './Salto';
import { initialValuesLogin } from './InitialValues';
import { validationSchemaLogin } from './ValidationSchema';
import { auth, dataUser, loginLocal, signInGoogle, signOutUser } from '../../../../Firebase/firebase-utils';
import { login } from "../../../../store/slices/auth";
import { useDispatch, useSelector } from 'react-redux';

export default function FormLogin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const buttonRedirect = () => {
        return navigate("/register");
    };
    const state = useSelector(state => state.auth)

    useEffect(() => {

        return () => {
            console.log(state)
        }
    }, [state])

    const onGoogleSignHandler = async () => {
        const user = await signInGoogle();
        console.log("user", user)
        //token user
        console.log("TokenUser", auth.currentUser.accessToken)
        const token = auth.currentUser.accessToken

        const { email, photoURL, displayName } = user

        dispatch(login({ email, photoURL, displayName, token }))
        return navigate('/homeScreen');
    }


    const buttonGoogle = () => {
        return (

            <ButtonSocial onclick={onGoogleSignHandler}>
                <div className='auth__logo-redSocial'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="38px" height="38px">
                        <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                        <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                        <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                    </svg>
                    <p className='auth__sesion-placeholder'>Iniciá sesión con Google</p>
                </div>
            </ ButtonSocial >
        )
    }

    const buttonFacebook = () => {
        return (

            // la funcion getDataUniversity(param), lleva como parametros la ciudad a traer
            <ButtonSocial onclick={signOutUser}>
                <div className='auth__logo-redSocial'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 16C32 7.1625 24.8375 0 16 0C7.1625 0 0 7.1625 0 16C0 23.9875 5.85 30.6062 13.5 31.8062V20.625H9.4375V16H13.5V12.475C13.5 8.46563 15.8875 6.25 19.5438 6.25C21.2938 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1063C19.1188 10.5 18.5 11.7344 18.5 13V16H22.9375L22.2281 20.625H18.5V31.8062C26.15 30.6062 32 23.9875 32 16Z" fill="#1877F2" />
                    </svg>
                    <p className='auth__sesion-placeholder'>Iniciá sesión con Facebook</p>
                </div>

            </ ButtonSocial >
        )
    }

    return (
        <>
            <div className='auth__form'>
                {buttonGoogle()}
                {buttonFacebook()}
                <Salto />
            </div>
            <Formik
                initialValues={initialValuesLogin}
                validationSchema={validationSchemaLogin}
                onSubmit={async (values, { resetForm }) => {
                    try {
                      const result =  await loginLocal(values)
                      console.log("result",result)
                      
                        if (result){

                          const data = await dataUser()
                           // DataUserPerfil
                           console.log("DataUser", data)
                           const { nameUser, email } = data
                           swal.fire({
                               position: 'top-end',
                               icon: 'success',
                               title: 'Logueo exitoso!!',
                               showConfirmButton: false,
                               timer: 1500
                           })
                           //Token firebase
                           console.log(auth.currentUser.accessToken)
                           const token = auth.currentUser.accessToken
                           dispatch(login({ nameUser, email, token }))
                           return navigate('/homeScreen');
                        }                     

                        //resetFormLogueo
                       
                        
                    }
                    catch (err) {
                        console.log(err)
                        resetForm({ values: { password: "", email: "" } })
                    }


                }}
            >
                {({ errors, touched }) => (
                    <Form className='auth__form'>

                        <label className='auth__form__label'>
                            <p className='auth__name-label'>
                                Dirección de correo Electrónico
                            </p>
                            <Field
                                name="email"
                                type="text"
                                placeholder={"nombre@mail.com"}
                                style={errors.email && { border: "solid 1px rgb(214,47,39)" }}
                                as={Input}
                            >

                            </Field>
                            {errors.email && touched.email ? (
                                <div className='auth__errorFormik'>{errors.email}</div>
                            ) : null}
                        </label>
                        <label className='auth__form__label'>
                            <p className='auth__name-label'>
                                Contraseña
                            </p>
                            <Field
                                name="password"
                                type="password"
                                placeholder={"8 caracteres"}
                                style={errors.email && { border: "solid 1px rgb(214,47,39)" }}
                                as={Input}
                            >

                            </Field>
                            {errors.password && touched.password ? (
                                <div className='auth__errorFormik'>{errors.password}</div>
                            ) : null}
                        </label>

                        <div className='auth__container__olvidasteContraseña'>
                            {/* Aqui va Link */}
                            <Link to="/forgotPassword" className='auth__olvidasteContraseña' >
                                Olvidaste la contraseña?

                            </Link>
                        </div>
                        <div className='auth__container-checkbox'>
                            <input type="checkbox" className='auth__check-recordarme' />
                            <p className='auth__title-recordarme'>Recordarme</p>
                        </div>

                        <div className="auth__container-buttons">
                            <Button background={"#011826"} color={"#FFFFFF"}>
                                Iniciar sesión
                            </Button>
                            <Button
                                onclick={buttonRedirect}
                                background={"#FFFFFF"}
                                color={"#011826"}
                            >
                                Registrarme
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}
