import * as Yup from "yup";
const re =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
const required = "* Campo obligatorio";
const email = "Correo electrónico inválido";
export const ValidationUniversidad = () =>
  Yup.object().shape({
    title: Yup.string()
      .min(6, "La cantidad mínima de caracteres es 6")
      .required(required),
    address: Yup.string()
      .min(6, "La cantidad mínima de caracteres es 6")
      .required(required),
    location: Yup.string().required(required),
    tel: Yup.number().required(required),
    image: Yup.string().required(required),
    page: Yup.string().matches(re, "URL no valida").required(required),
    email: Yup.string().email(email),
  });
export const ValidationCarrera = () =>
  Yup.object().shape({
    titleCarrera: Yup.string()
      .min(6, "La cantidad mínima de caracteres es 6")
      .required(required),
    description: Yup.string().required(required),
    url: Yup.string().matches(re, "URL no valida"),
    imagen: Yup.string().matches(re, "URL no valida"),
  });
