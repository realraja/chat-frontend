import { createSlice } from "@reduxjs/toolkit";

const authSlicer = createSlice({
  name: "auth",
  initialState: {
    user:null,
    isAdmin:false,
    loading:true,
    isLogout:null
  },
  reducers: {
    login: (state,action) =>{
        state.user = action.payload;
        state.loading = false;
    },
    logout: (state,action) =>{
        state.user = null;
        state.loading = false;
        state.isLogout = 'logout';
    }
  },
  extraReducers(builder){}
});


export const {login, logout} = authSlicer.actions;

export default authSlicer;