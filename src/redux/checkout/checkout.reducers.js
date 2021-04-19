import CheckoutActionTypes from "./checkout.types.js";

const INITIAL_STATE = {
  start: false,
  success: null,
  failure: null,
  cancel: null,
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
        ...INITIAL_STATE,
        success: action.payload,
      };
    case CheckoutActionTypes.CHECKOUT_PROCESS_FAIL:
      return {
        ...INITIAL_STATE,
        failure: action.payload,
      };
    case CheckoutActionTypes.CHECKOUT_PROCESS_CANCEL:
      return {
        ...INITIAL_STATE,
        cancel: action.payload,
      };
    default:
      return state;
  }
};

export default checkoutReducer;
