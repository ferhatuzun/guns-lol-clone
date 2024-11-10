import { UiFastRegister } from "./Ui/UiFastRegister";

export const Section = () => {
  return (
    <div className="bg-main w-[70%] rounded-xl text-white p-[55px] mx-auto">
      <h1 className="text-5xl">İstediğiniz her şey burada.</h1>
      <p className="text-lg">
        Banana.com kullanan 280.000'den fazla kişiye katılın ve büyük <br />
        topluluğumuzun bir parçası olun
      </p>
      <UiFastRegister />
    </div>
  );
};
