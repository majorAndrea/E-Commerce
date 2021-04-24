import { takeLatest, call, all } from "redux-saga/effects";
import { firestore } from "../../firebase/";
import CheckoutActionTypes from "./checkout.types.js";

const checkoutSuccess = function* ({ payload }) {
  try {
    const {
      create_time,
      id,
      payer,
      status,
      update_time,
      products_bought,
    } = yield payload;
    yield firestore
      .collection("orders")
      .add({ create_time, id, payer, status, update_time, products_bought });
    yield alert("ORDER CREATED!");
  } catch (error) {
    alert(error);
  }
};

const onCheckoutSuccess = function* () {
  yield takeLatest(
    CheckoutActionTypes.CHECKOUT_PROCESS_SUCCESS,
    checkoutSuccess
  );
};

export const checkoutSagas = function* () {
  yield all([call(onCheckoutSuccess)]);
};
