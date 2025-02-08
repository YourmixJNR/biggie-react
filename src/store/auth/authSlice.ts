import {
  showSuccessMessage,
  showErrorMessage,
} from "../../utils/toast-service";
import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/auth";
import { storage } from "../../utils";
import { signIn, signUp } from "./authThunks";

interface IAuthStore {
  error: string;
  user: IUser;
  isLoggedIn: boolean;
  requestStatus?: "idle" | "loading" | "succeeded" | "failed";
}

const name = "auth";

const initialState: IAuthStore = {
  error: "",
  user: {
    _id: "",
    email: "",
    fullname: "",
    gender: "",
    verified: false,
  },
  isLoggedIn: false,
  requestStatus: "idle",
};

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    signOut: (state) => {
      state.requestStatus = "idle";
      state.user = {
        _id: "",
        email: "",
        fullname: "",
        gender: "",
        verified: false,
      };
      state.error = "";
      state.isLoggedIn = false;
      storage.removeAuthToken();
      window.location.assign("/login");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.requestStatus = "loading";
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.error.message!;
      state.requestStatus = "failed";
      showErrorMessage(action.error.message!);
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.requestStatus = "succeeded";
      state.isLoggedIn = true;
      state.user = action.payload?.data;
      storage.setAuthToken(action.payload.token);
      showSuccessMessage(action.payload.message);
    });

    // => Login Async Reducer
    builder.addCase(signIn.pending, (state) => {
      state.requestStatus = "loading";
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.error = action.error.message!;
      state.requestStatus = "failed";
      showErrorMessage(action.error.message!);
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload?.data;
      state.requestStatus = "succeeded";
      state.isLoggedIn = true;
      showSuccessMessage(action.payload.message);
      storage.setAuthToken(action.payload.token);
    });
  },
});

// export actions.
export const { signOut } = authSlice.actions;

// export reducer.
export default authSlice.reducer;
