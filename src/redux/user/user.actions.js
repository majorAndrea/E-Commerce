import UserActionTypes from "./user.types.js";

export const setCurrentUser = (user) => {
  return { type: UserActionTypes.SET_CURRENT_USER, payload: user };
};

export const signInWithGoogle = () => ({
  type: UserActionTypes.SIGN_IN_WITH_GOOGLE,
});

export const signInWithEmail = (emailAndPassword) => ({
  type: UserActionTypes.SIGN_IN_WITH_EMAIL,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signUpStart = (user) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: user,
});

export const signUpSuccess = (user) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: user,
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const isUserLoggedIn = () => ({
  type: UserActionTypes.IS_USER_LOGGED_IN,
});

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT_USER,
});
