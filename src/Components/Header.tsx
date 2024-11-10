import Logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <div className="flex fixed w-full justify-center top-5 z-50">
        <div className="text-white bg-menu flex items-center justify-between px-5 w-[70%] rounded-full h-[80px] shadow-2xl">
          <div className="flex items-center gap-3 ">
            <img src={Logo} className="w-[50px]" />
            <h1 className="text-2xl">Banana.com</h1>
          </div>
          <div>
            <ul className="flex items-center gap-5">
              <li className="py-2 px-4 rounded-lg hover:bg-stone-400 transition-all">
                <a href="#">Fiyatlandırma</a>
              </li>
              <li className="py-2 px-4 rounded-lg hover:bg-stone-400 transition-all">
                <Link to="/login">Giriş</Link>
              </li>
              <li className="py-2 px-4 rounded-lg transition-all bg-purple-700 border-purple-900 border-4 border-solid">
                <Link to="/register">Kaydol</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
