import * as yup from "yup"

const registerSchema = yup.object({
    email: yup.string().required("Bu alan zorunludur!").min(3,"Mail adresiniz 3 haneden kısa olamaz !"),
    password: yup.string().required("Bu alan zorunludur!").min(6,"Şifreniz 6 haneden kısa olamaz!").max(16,"Şifreniz 16 haneden uzun olamaz!"),
    username:yup.string().required("Bu alan zorunludur!").min(5,"Kullanıcı adınız 5 haneden kısa olamaz!").max(16,"Kullanıcı adınız 16 haneden uzun olamaz!"),
    control:yup.boolean().isTrue("Kullanıcı sözleşmesini onaylamalısınız!")
})

export default registerSchema