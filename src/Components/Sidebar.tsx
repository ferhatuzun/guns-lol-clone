import DashboardImages from "../assets/images/dashboard.webp";
import ProfileImages from "../assets/images/profile_showcase.webp";
import { UiFastRegister } from "./Ui/UiFastRegister";

export const Sidebar = () => {
  return (
    <>
      <nav className="max-h-[100vh] w-full bg-main  bg-cover bg-no-repeat overflow-hidden">
        <section className="flex flex-col items-center h-full  mx-auto">
          <div className="text-center mt-[150px]">
            <h1 className="text-6xl font-bold mb-6 text-white">
              İstediğiniz her şey burada.
            </h1>
            <p className="text-xl font-medium w-[70%] text-white mx-auto">
            banana.com modern, zengin özelliklere sahip biyolinkler ve hızlı, güvenli dosya barındırma için başvuracağınız adrestir. İhtiyacınız olan her şey burada.
            </p>
          </div>
          <UiFastRegister />
          <div className="flex mt-[90px] items-center justify-center">
            <img src={DashboardImages} className="w-[30%]" />
            <img src={ProfileImages} className="w-[30%]" />
          </div>
        </section>
      </nav>
    </>
  );
};
