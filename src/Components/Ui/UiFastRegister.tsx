import { useState } from "react";
import { Link } from "react-router-dom";
export const UiFastRegister = () => {
  const [username, setUsername] = useState<string>("")
  return (
    <div className="flex items-center mt-[50px]">
      <div className="relative flex items-center  bg-gray-800 rounded-lg w-[250px] h-[50px] text-white focus:outline-purple-700">
        <p className="absolute text-md left-2 w-1/2">banana.com/</p>
        <input
          type="text"
          className="w-1/2  rounded border-none bg-transparent ml-auto text-gray-300 outline-none"
          placeholder="username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
      </div>
      <Link to={{pathname:"/register",search:"?username="+username}} className="bg-purple-700 py-3 px-4 text-white rounded-lg outline outline-purple-950 ml-5 text-lg hover:outline-purple-500 transition-all">
        Kaydol
      </Link>
    </div>
  );
};
