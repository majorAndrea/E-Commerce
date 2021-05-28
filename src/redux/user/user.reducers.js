import UsersActionTypes from "./user.types.js";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UsersActionTypes.SIGN_IN_FAILURE:
    case UsersActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        currentUser: null,
        error: action.payload,
      };
    case UsersActionTypes.LOGOUT_USER:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducers;
