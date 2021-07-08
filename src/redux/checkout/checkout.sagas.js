import { takeLatest, call, all, put } from "redux-saga/effects";
import { firestore } from "../../firebase/";
import CheckoutActionTypes from "./checkout.types";
import { emptyCart } from "../cart/cart.actions";
import {
  setCheckoutUserInfoToDbFail,
  setCheckoutUserInfoToDbSuccess,
} from "../checkout/checkout.actions";

const checkoutSuccess = function* ({ payload }) {
  try {
    const {
      create_time,
      id,
      payer,
      status,
      update_time,
      products_bought,
      shipment_info,
    } = yield payload;
    yield firestore.collection("orders").add({
      create_time,
      id,
      payer,
      status,
      update_time,
      products_bought,
      shipment_info,
    });
    yield put(emptyCart());
  } catch (error) {
    alert(error);
  }
};

const checkoutSaveUserInfoToDb = function* ({ payload }) {
  try {
    const { id, ...others } = yield payload;
    const userRef = yield firestore.collection("users").doc(id);
    const userSnapShot = yield userRef.get();
    if (userSnapShot.exists) {
      yield userRef.update({
        personalAndShipmentInfo: {
          ...others,
        },
      });
      yield put(setCheckoutUserInfoToDbSuccess());
    } else {
      yield put(
        setCheckoutUserInfoToDbFail(
          "Can't save user checkout informations on the DB, user does not exists."
        )
      );
    }
  } catch (error) {
    yield put(setCheckoutUserInfoToDbFail(error));
  }
};

const onCheckoutSuccess = function* () {
  yield takeLatest(
    CheckoutActionTypes.CHECKOUT_PROCESS_SUCCESS,
    checkoutSuccess
  );
};

const onCheckoutSaveUserInfotoDb = function* () {
  yield takeLatest(
    CheckoutActionTypes.SET_CHECKOUT_USER_INFO_TO_DB,
    checkoutSaveUserInfoToDb
  );
};

export const checkoutSagas = function* () {
  yield all([call(onCheckoutSuccess), call(onCheckoutSaveUserInfotoDb)]);
};
