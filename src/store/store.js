import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { adminReducer } from "./admin create test/adminSlice";
import { userReducer } from "./user create test/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    test: adminReducer,
    userTest: userReducer,
  },
});
