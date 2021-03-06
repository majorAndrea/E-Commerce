const CheckoutActionTypes = {
  CHECKOUT_PROCESS_START: "CHECKOUT_PROCESS_START",
  CHECKOUT_PROCESS_SUCCESS: "CHECKOUT_PROCESS_SUCCESS",
  CHECKOUT_PROCESS_FAIL: "CHECKOUT_PROCESS_FAIL",
  CHECKOUT_PROCESS_CANCEL: "CHECKOUT_PROCESS_CANCEL",
  SET_CHECKOUT_PERSONAL_INFO: "SET_CHECKOUT_PERSONAL_INFO",
  SET_CHECKOUT_SHIPMENT_INFO: "SET_CHECKOUT_SHIPMENT_INFO",
  SET_CHECKOUT_USER_SHIPMENT_INFO_TO_DB:
    "SET_CHECKOUT_USER_SHIPMENT_INFO_TO_DB",
  SET_CHECKOUT_USER_SHIPMENT_INFO_TO_DB_SUCCESS:
    "SET_CHECKOUT_USER_SHIPMENT_INFO_TO_DB_SUCCESS",
  SET_CHECKOUT_USER_SHIPMENT_INFO_TO_DB_FAIL:
    "SET_CHECKOUT_USER_SHIPMENT_INFO_TO_DB_FAIL",
  FETCH_CHECKOUT_USER_SHIPMENT_INFO_FROM_DB:
    "FETCH_CHECKOUT_USER_SHIPMENT_INFO_FROM_DB",
  FETCH_CHECKOUT_USER_SHIPMENT_INFO_FROM_DB_SUCCESS:
    "FETCH_CHECKOUT_USER_SHIPMENT_INFO_FROM_DB_SUCCESS",
  FETCH_CHECKOUT_USER_SHIPMENT_INFO_FROM_DB_FAIL:
    "FETCH_CHECKOUT_USER_SHIPMENT_INFO_FROM_DB_FAIL",
};

export default CheckoutActionTypes;
