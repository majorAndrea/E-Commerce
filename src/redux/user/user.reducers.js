import UsersActionTypes from "./user.types.js";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  checkoutPersonal: {
    firstname: null,
    lastname: null,
    email: null,
  },
  checkoutSpedition: {
    country: null,
    state: null,
    city: null,
    zipCode: null,
    addressOne: null,
    addressTwo: null,
  },
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
    case UsersActionTypes.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UsersActionTypes.SET_USER_CHECKOUT_PERSONAL_INFO:
      return {
        ...state,
        checkoutPersonal: { ...action.payload },
      };
    case UsersActionTypes.SET_USER_CHECKOUT_SPEDITION_INFO:
      return {
        ...state,
        checkoutSpedition: { ...action.payload },
      };
    default:
      return state;
  }
};

export default userReducers;
