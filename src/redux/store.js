import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./slices/postSlice";
import { userSlice } from "./slices/userSlice";
export const store=configureStore({
    reducer:{
        post:postSlice.reducer,
        user:userSlice.reducer,
    },
    
})  