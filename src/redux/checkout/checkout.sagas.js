import { takeLatest, put, call, all } from "redux-saga/effects";
import { createCollectionsAndDocs } from "../../firebase/";
import CheckoutActionTypes from "./checkout.types.js";

const checkoutSuccess = function* ({ payload }) {
  try {
    const { create_time, id, payer, status, update_time } = yield payload;
    yield call(createCollectionsAndDocs, "orders", [
      {
        create_time,
        id,
        payer,
        status,
        update_time,
      },
    ]);
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
