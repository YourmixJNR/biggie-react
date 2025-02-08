import { createAsyncThunk } from "@reduxjs/toolkit";
import { showInfoMessage } from "../../utils/toast-service";
import { LoginDto, UserDto } from "../../types/auth";
import { API_CONFIG, APP_CONSTANTS } from "../../config";
import { apiClient } from "../../services";

const name = "auth";

export const signUp = createAsyncThunk<any, UserDto>(
  `${name}/signUp`,
  async (registrationData) => {
    if (!registrationData)
      return showInfoMessage("No registration information");
    try {
      const result = await apiClient.post(
        API_CONFIG.ENDPOINTS.AUTH.SIGNUP,
        registrationData
      );
      if (result.status === APP_CONSTANTS.HTTP_STATUS.CREATED && result.data) {
        return result.data;
      } else if (result.status === APP_CONSTANTS.HTTP_STATUS.BAD_REQUEST) {
        throw new Error(result.data.error);
      }
    } catch (e: any) {
      // authErrorHandler(err);
    }
  }
);

export const signIn = createAsyncThunk<any, LoginDto>(
  `${name}/signIn`,
  async (logInCredential) => {
    if (!logInCredential)
      return showInfoMessage("Enter your login credentials");
    try {
      const result = await apiClient.post(
        API_CONFIG.ENDPOINTS.AUTH.LOGIN,
        logInCredential
      );
      if (result.status === APP_CONSTANTS.HTTP_STATUS.CREATED && result.data) {
        return result.data;
      } else if (result.status === APP_CONSTANTS.HTTP_STATUS.BAD_REQUEST) {
        throw new Error(result.data.error);
      }
    } catch (e: any) {
      // authErrorHandler(err);
    }
  }
);
