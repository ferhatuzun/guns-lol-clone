import Logo from "../assets/images/logo.webp";
import { useFormik } from "formik";
import registerSchema from "../Shemas/registerSchema";
import axios from "axios";
import { db } from "../App";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface dataType {
  email: string;
  username: string;
  password: string;
}

export const Register = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const username = queryParams.get("username");

  const navigate = useNavigate()
  const [userExistControl, setUserExistControl] = useState<boolean>(false);
  const [userExistError, setUserExistError] = useState<string>("");
  const [data, setData] = useState<dataType[]>([]);
  const getData = async () => {
    const response = axios.get(db + "users");
    setData((await response).data);
  };
  useEffect(() => {
    getData();
  }, []);
  const onSubmit = async () => {
    let userExist = false;
    for (let element of data) {
      if (
        element.email === values.email ||
        element.username === values.username
      ) {
        userExist = true;
        break;
      }
    }
    if (userExist == false) {
      await axios.post(db + "users", {
        email: values.email,
        username: values.username,
        password: values.password,
      });
      await axios.post(db+"userPanels",{
        email:values.email,
        username:values.username,
        socialMedia:{
          instagram:"",
          x:"",
          youtube:"",
          twitch:"",
          kick:"",
          discord:"",
          linkedIn:"",
        },
        profileImage:"https://cdn-icons-png.flaticon.com/512/219/219986.png",
        profileBanner:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY984MJTzYPr8mvWl_k0R9CioIsR9Jq_cjvw&s"
      })
      setUserExistError(
        "Başarıyla kaydoldunuz, giriş ekranına yönlendiriliyorsunuz."
      );
      setTimeout(() => {
        navigate("/login?email="+values.email)
      }, 1000);
      setUserExistControl(true);
      userExist = false;
    } else {
      setUserExistError(
        "Email yada kullanıcı adı farklı bir hesapta kullanılıyor."
      );
    }
  };
  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email:"",
      password: "",
      username:  username ? username : "",
      control: false,
    },
    onSubmit,
    validationSchema: registerSchema,
  });
  return (
    <div className="w-full flex flex-col items-center justify-center h-[100vh]">
      <div className="text-white w-[400px] bg-slate-900  rounded-xl flex flex-col items-center p-10">
        <div className="flex flex-col items-center">
          <img src={Logo} className="w-1/4 inline-block mb-3" />
          <p className="font-semibold text-lg">Banana.com hesabını oluştur.</p>
        </div>
        <div className="w-[300px] mt-14">
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <span>Email</span>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                value={values.email}
                onFocus={(e) => (e.target.type = "email")}
                className="rounded-lg bg-gray-950 p-2 outline-none text-sm"
                required
              />
              <p className="text-red-600 text-sm">{errors.email}</p>
            </div>
            <div className="flex flex-col gap-1">
              <span>Şifre</span>
              <input
                name="password"
                type="password"
                onChange={handleChange}
                value={values.password}
                className="rounded-lg bg-gray-950 p-2 outline-none text-sm"
                required
              />
              <p className="text-red-600 text-sm">{errors.password}</p>
            </div>
            <div className="flex flex-col gap-1">
              <span>Kullanıcı Adı</span>
              <input
                name="username"
                type="username"
                onChange={handleChange}
                value={values.username}
                className="rounded-lg bg-gray-950 p-2 outline-none text-sm"
                required
              />
              <p className="text-red-600 text-sm">{errors.username}</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                name="control"
                className=""
                width="50"
                onChange={handleChange}
                checked={values.control}
              />
              <p className="text-sm">Kullanım Koşullarını kabul ediyorum.</p>
            </div>
            <p className="text-red-600 text-sm">{errors.control}</p>
            <div>
              <p className={!userExistControl ? "text-red-600" : "text-green-600"}>{userExistError}</p>
              <button
                type="submit"
                className="bg-purple-700 w-full rounded-lg p-2 mt-5 border-purple-950 border-4 border-solid"
                disabled={userExistControl}
              >
                Kaydol
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm">
                Zaten hesabın var mı ?{" "}
                <Link to="/login" className="text-purple-700">
                  Giriş yap
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
