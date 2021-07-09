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

export const setCheckoutUserShipmentInfoToDb = (payload) => ({
  type: CheckoutActionTypes.SET_CHECKOUT_USER_SHIPMENT_INFO_TO_DB,
  payload,
});

export const setCheckoutUserShipmentInfoToDbSuccess = () => ({
  type: CheckoutActionTypes.SET_CHECKOUT_USER_SHIPMENT_INFO_TO_DB_SUCCESS,
});

export const setCheckoutUserShipmentInfoToDbFail = (payload) => ({
  type: CheckoutActionTypes.SET_CHECKOUT_USER_SHIPMENT_INFO_TO_DB_FAIL,
  payload,
});

export const fetchCheckoutUserShipmentInfoFromDb = (payload) => ({
  type: CheckoutActionTypes.FETCH_CHECKOUT_USER_SHIPMENT_INFO_FROM_DB,
  payload,
});

export const fetchCheckoutUserShipmentInfoFromDbSuccess = (payload) => ({
  type: CheckoutActionTypes.FETCH_CHECKOUT_USER_SHIPMENT_INFO_FROM_DB_SUCCESS,
  payload,
});

export const fetchCheckoutUserShipmentInfoFromDbFail = (payload) => ({
  type: CheckoutActionTypes.FETCH_CHECKOUT_USER_SHIPMENT_INFO_FROM_DB_FAIL,
  payload,
});
