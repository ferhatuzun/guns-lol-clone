import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.webp";
import { useDispatch } from "react-redux";
import { exitUser } from "../../Store/userSlice";
type propsType={
    email:string
}


export const AdminMenu = (props:propsType) => {
    const dispatch = useDispatch()
  return (
    <div className="sticky h-[100vh] w-[250px] bg-slate-600 text-white">
      <div className="flex flex-col items-center">
        <div className="text-white flex items-center mt-5">
          <img src={Logo} className="w-[60px]" />
          <p className="font-bold text-xl">Admin Panel</p>
        </div>
        <div>
            <p className="mt-5">{props.email}</p>
        </div>
        <div className="w-full p-2 mt-[100px]">
            <NavLink to="" className="bg-slate-800 w-full inline-block text-center rounded-lg p-2">Ayarlar</NavLink>
            <NavLink to="" className="bg-slate-800 w-full inline-block text-center rounded-lg p-2 mt-1" onClick={()=>dispatch(exitUser())}>Çıkış Yap</NavLink>
        </div>
      </div>
    </div>
  );
};
