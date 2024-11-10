import { createSlice } from "@reduxjs/toolkit";

export type userSliceType = {
  email: string | null;
  userData:{}
};

const values: userSliceType = {
  email: localStorage.getItem("email") || null,
  userData:{}
};

const userSlice = createSlice({
  name: "users",
  initialState: values,
  reducers: {
    loginUser: (state, aciton) => {
      localStorage.setItem("email", aciton.payload);
      state.email = aciton.payload;
    },
    exitUser: (state) => {
      localStorage.removeItem("email");
      state.email = "";
    },
    setUserData:(state,action)=>{
        state.userData=action.payload
    }
  },
});

export const { loginUser, exitUser,setUserData } = userSlice.actions;
export default userSlice.reducer;
