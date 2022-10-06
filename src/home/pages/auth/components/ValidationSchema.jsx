import * as Yup from 'yup';

const REQUIRED = '* Campo Requerido';
const EMAIL = 'Correo electrónico inválido';

export const validationSchemaLogin = Yup.object({
    email: Yup.string().email(EMAIL).required(REQUIRED),
    password: Yup.string().min(8, 'Mínimo de caracteres: 8').required(REQUIRED),
});

export const validationSchemaRegister = Yup.object({
    fullName:Yup.string()
    .matches(/^[a-zA-Z ]+$/, 'Solo letras') 
    .min(6, 'Minimo 6 caracteres')
    .max(20, 'Maximo 20 caracteres')
    .required(REQUIRED),
    email: Yup.string()
    .email(EMAIL)
    .required(REQUIRED),
    nameUser:Yup.string()
    .min(4, 'Minimo 4 caracteres')
    .max(12, 'Maximo 12 caracteres')
    .required(REQUIRED),
    password: Yup.string()
    .min(8, 'Mínimo de caracteres: 8')
    .max(14, 'Maximo 14 caracteres')
    .required(REQUIRED),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'La contraseña no coincide')
      .required(REQUIRED)
});
