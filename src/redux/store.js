import { configureStore } from "@reduxjs/toolkit";
import authSlicer from "./slicer/auth";


const store = configureStore({
    reducer: {
        [authSlicer.name] : authSlicer.reducer,
    }
})

export default store;