import CheckoutActionTypes from "./checkout.types.js";

export const checkoutProcessStart = () => ({
  type: CheckoutActionTypes.CHECKOUT_PROCESS_START,
});

export const checkoutProcessSuccess = (details) => ({
  type: CheckoutActionTypes.CHECKOUT_PROCESS_SUCCESS,
  payload: details,
});

export const checkoutProcessFail = (details) => ({
  type: CheckoutActionTypes.CHECKOUT_PROCESS_FAIL,
  payload: details,
});

export const checkoutProcessCancel = (details) => ({
  type: CheckoutActionTypes.CHECKOUT_PROCESS_CANCEL,
  payload: details,
});

export const setCheckoutPersonalInfo = (payload) => ({
  type: CheckoutActionTypes.SET_CHECKOUT_PERSONAL_INFO,
  payload,
});

export const setCheckoutSpeditionInfo = (payload) => ({
  type: CheckoutActionTypes.SET_CHECKOUT_SPEDITION_INFO,
  payload,
});
