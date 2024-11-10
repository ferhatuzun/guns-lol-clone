import { AdminMenu } from "./Ui/AdminMenu";
import { Settings } from "./Ui/Settings";
import { useSelector } from "react-redux";
import { userSliceType } from "../Store/userSlice";
import { useNavigate } from "react-router-dom";
export const AdminPanel = () => {
  const navigate = useNavigate();
  const { email } = useSelector((store: { user: userSliceType }) => store.user);
  return (
    <>
      {email ? (
        <div className="flex">
          <AdminMenu email={email}/>
          <Settings/>
        </div>
      ) : (
        <div>
          <p className="text-red-700 text-2xl">Giriş yapmalısınız</p>
          {setTimeout(() => {
            navigate("/login");
          }, 1000)}
        </div>
      )}
    </>
  );
};
