import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth/authSlice";
import { adminReducer } from "./slices/adminSlice/adminSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    test: adminReducer,
  },
});
