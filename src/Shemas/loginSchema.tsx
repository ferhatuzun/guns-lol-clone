import * as yup from "yup"

const loginSchema = yup.object({
    email: yup.string().required("Bu alan zorunludur!").min(3,"Mail adresiniz 3 haneden kısa olamaz !"),
    password: yup.string().required("Bu alan zorunludur!").min(6,"Şifreniz 6 haneden kısa olamaz!").max(16,"Şifreniz 16 haneden uzun olamaz!"),
})

export default loginSchema