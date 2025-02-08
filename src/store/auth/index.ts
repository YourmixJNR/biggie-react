// export thunks
export { signIn, signUp } from "./authThunks";

// export slice actions
export { signOut } from "./authSlice";

// export selectors
export {
  selectAuth,
  selectAuthUser,
  selectAuthStatus,
  selectIsLoggedIn,
} from "./authSelectors";

// export default reducer
export { default as authReducer } from "./authSlice";
