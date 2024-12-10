import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { adminReducer } from "./admin create test/adminSlice";
import { userTestReducer } from "./userTest/userTestSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    test: adminReducer,
    userTest: userTestReducer,
  },
});
