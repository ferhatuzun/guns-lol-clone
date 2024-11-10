import "./App.css";
import { AdminPanel } from "./Components/AdminPanel";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { UserPanel } from "./Components/UserPanel";
export const db= "http://localhost:3000/"
function App() {
  return (
    <>
      

      <BrowserRouter future={{ v7_startTransition: true,}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/panel"  element={<AdminPanel/>}/>
          <Route path="*"  element={<UserPanel/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
