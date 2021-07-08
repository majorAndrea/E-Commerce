import CheckoutActionTypes from "./checkout.types.js";

const INITIAL_STATE = {
  start: false,
  success: null,
  failure: null,
  cancel: null,
  checkoutPersonal: {
    firstname: "",
    lastname: "",
    email: "",
  },
  checkoutShipment: {
    country: "",
    state: "",
    city: "",
    zipCode: "",
    addressOne: "",
    addressTwo: "",
  },
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CheckoutActionTypes.CHECKOUT_PROCESS_START:
      return {
        ...state,
        start: true,
      };
    case CheckoutActionTypes.CHECKOUT_PROCESS_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };
    case CheckoutActionTypes.CHECKOUT_PROCESS_FAIL:
      return {
        ...state,
        failure: action.payload,
      };
    case CheckoutActionTypes.CHECKOUT_PROCESS_CANCEL:
      return {
        ...state,
        cancel: action.payload,
      };
    case CheckoutActionTypes.SET_CHECKOUT_PERSONAL_INFO:
      return {
        ...state,
        checkoutPersonal: { ...action.payload },
      };
    case CheckoutActionTypes.SET_CHECKOUT_SHIPMENT_INFO:
      return {
        ...state,
        checkoutShipment: { ...action.payload },
      };
    case CheckoutActionTypes.SET_CHECKOUT_USER_INFO_TO_DB_SUCCESS: {
      return {
        ...state,
        success: true,
      };
    }
    case CheckoutActionTypes.SET_CHECKOUT_USER_INFO_TO_DB_FAIL: {
      return {
        ...state,
        failure: action.payload,
      };
    }
    default:
      return state;
  }
};

export default checkoutReducer;
