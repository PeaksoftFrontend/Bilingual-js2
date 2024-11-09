import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
<<<<<<< HEAD
    role: "USER",
=======
    role: "ADMIN",
>>>>>>> e1ec3229b2f09827534b74c44c88135e04f8bab4
    isAuth: false,
    isLoading: false,
    token: null,
    isError: null,
    openSignIn: false,
    openSignUp: false,
  },
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },

    openSignInModal: (state) => {
      state.openSignIn = true;
      state.openSignUp = false;
    },

    closeModal: (state) => {
      state.openSignIn = false;
      state.openSignUp = false;
    },

    openSignUpModal: (state) => {
      state.openSignUp = true;
      state.openSignIn = false;
    },
  },
  extraReducers: () => {},
});

export const { setRole, openSignInModal, closeModal, openSignUpModal } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
