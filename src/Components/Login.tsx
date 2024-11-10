import Logo from "../assets/images/logo.webp";
import { useFormik } from "formik";
import axios from "axios";
import { db } from "../App";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginSchema from "../Shemas/loginSchema";
import { useDispatch } from "react-redux";
import { loginUser } from "../Store/userSlice";
import { useSelector } from "react-redux";
import { userSliceType } from "../Store/userSlice";

interface dataType {
  email: string;
  password: string;
}

export const Login = () => {
  const { email } = useSelector((store: { user: userSliceType }) => store.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sendEmail = queryParams.get("email");

  const navigate = useNavigate();
  const [userExistControl, setUserExistControl] = useState<boolean>(false);
  const [userExistError, setUserExistError] = useState<string>("");
  const [data, setData] = useState<dataType[]>([]);
  const getData = async () => {
    const response = await axios.get(db + "users");
    setData((await response).data);
  };
  useEffect(() => {
    getData();
  }, []);
  const onSubmit = () => {
    let userExist = false;
    for (let element of data) {
      if (
        element.email === values.email &&
        element.password === values.password
      ) {
        userExist = true;
        setUserExistControl(true);
        break;
      }
    }
    if (userExist) {
      setUserExistError("Başarıyla giriş yaptınız.");
      dispatch(loginUser(values.email));
      setUserExistControl(true);
      setTimeout(() => {
        navigate("/panel");
      }, 1000);
    } else {
      setUserExistError("Giriş bilgileri hatalı.");
      setUserExistControl(false);
    }
  };
  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: sendEmail ? sendEmail : "",
      password: "",
    },
    onSubmit,
    validationSchema: loginSchema,
  });
  return (
    <>
    {email ? 
    navigate("/panel")
    : 
      <div className="w-full flex flex-col items-center justify-center h-[100vh]">
        <div className="text-white w-[400px] bg-slate-900  rounded-xl flex flex-col items-center p-10">
          <div className="flex flex-col items-center">
            <img src={Logo} className="w-1/4 inline-block mb-3" />
            <p className="font-semibold text-lg">
              Banana.com hesabına giriş yap
            </p>
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

              <div>
                <p
                  className={
                    !userExistControl ? "text-red-600" : "text-green-600"
                  }
                >
                  {userExistError}
                </p>
                <button
                  type="submit"
                  className="bg-purple-700 w-full rounded-lg p-2 mt-5 border-purple-950 border-4 border-solid"
                  onClick={() => console.log()}
                >
                  Giriş
                </button>
              </div>
              <div className="text-center">
                <p className="text-sm">
                  Hesabın yok mu?{" "}
                  <Link to="/register" className="text-purple-700">
                    Kaydol
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    
    }
    </>
  );
};
