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

export const setCheckoutShipmentInfo = (payload) => ({
  type: CheckoutActionTypes.SET_CHECKOUT_SHIPMENT_INFO,
  payload,
});

export const setCheckoutUserInfoToDb = (payload) => ({
  type: CheckoutActionTypes.SET_CHECKOUT_USER_INFO_TO_DB,
  payload,
});

export const setCheckoutUserInfoToDbSuccess = () => ({
  type: CheckoutActionTypes.SET_CHECKOUT_USER_INFO_TO_DB_SUCCESS,
});

export const setCheckoutUserInfoToDbFail = (payload) => ({
  type: CheckoutActionTypes.SET_CHECKOUT_USER_INFO_TO_DB_FAIL,
  payload,
});
