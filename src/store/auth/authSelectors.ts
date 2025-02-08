import { IAuthStore } from "../../types/auth";

export const selectAuth = (store: any) => store.Auth as IAuthStore;

export const selectAuthUser = (store: any) => selectAuth(store).user;
export const selectIsLoggedIn = (store: any) => selectAuth(store).isLoggedIn;
export const selectAuthStatus = (store: any) => selectAuth(store).requestStatus;
