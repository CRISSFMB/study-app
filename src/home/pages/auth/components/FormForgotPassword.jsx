import { Formik, Form, Field } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';
import { resetPassword } from '../../../../Firebase/firebase-utils';
import Button from './Button';
import { initialValuesFotgotPassword } from './InitialValues'
import Input from './Input';
import { validationSchemaForgotPassword } from './ValidationSchema';


export default function FormForgotPassword() {
  return (
    <Formik
      initialValues={initialValuesFotgotPassword}
      validationSchema={validationSchemaForgotPassword}
      onSubmit={async values => {
        const { email } = values;
        await resetPassword(email)
      }

      }
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

          <div className='auth__container__olvidasteContraseña'>
            <Link to="/login" className="auth__olvidasteContraseña">¿Te acordaste de la contraseña?</Link>
          </div>


          <div className='auth__container-buttons'>
            <Button background={"#011826"} color={"#FFFFFF"}>
              Aceptar
            </ Button>

          </div>
        </Form>
      )}
    </Formik>
  )
}
