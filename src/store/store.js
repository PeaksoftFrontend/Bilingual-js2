import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { adminReducer } from "./admin create test/adminSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    test: adminReducer,
  },
});
