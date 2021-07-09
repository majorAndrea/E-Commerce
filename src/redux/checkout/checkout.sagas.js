import { takeLatest, call, all, put } from "redux-saga/effects";
import { firestore, checkIfUserExistsOnDb } from "../../firebase/";
import CheckoutActionTypes from "./checkout.types";
import { emptyCart } from "../cart/cart.actions";
import {
  setCheckoutUserShipmentInfoToDbFail,
  setCheckoutUserShipmentInfoToDbSuccess,
  fetchCheckoutUserShipmentInfoFromDbSuccess,
  fetchCheckoutUserShipmentInfoFromDbFail,
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

const checkoutSaveUserShipmentInfoToDb = function* ({ payload }) {
  try {
    const { id, ...others } = yield payload;
    const userRef = yield firestore.collection("users").doc(id);
    const userSnapShot = yield userRef.get();
    if (userSnapShot.exists) {
      yield userRef.update({
        shipmentInfo: {
          ...others,
        },
      });
      yield put(setCheckoutUserShipmentInfoToDbSuccess());
    } else {
      throw new Error(
        "Can't save user checkout information on the DB, user does not exists."
      );
    }
  } catch (error) {
    yield put(setCheckoutUserShipmentInfoToDbFail(error));
  }
};

const fetchCheckoutUserShipmentInfoFromDb = function* ({ payload: userId }) {
  try {
    const userSnapShot = yield call(checkIfUserExistsOnDb, userId);
    if (userSnapShot) {
      const {
        shipmentInfo: { shipment },
      } = yield userSnapShot.data();
      yield put(fetchCheckoutUserShipmentInfoFromDbSuccess(shipment));
    } else {
      throw new Error(
        "Can't retrive user checkout information from the DB, user does not exists."
      );
    }
  } catch (error) {
    yield put(fetchCheckoutUserShipmentInfoFromDbFail(error));
  }
};

const onCheckoutSuccess = function* () {
  yield takeLatest(
    CheckoutActionTypes.CHECKOUT_PROCESS_SUCCESS,
    checkoutSuccess
  );
};

const onCheckoutSaveUserShipmentInfotoDb = function* () {
  yield takeLatest(
    CheckoutActionTypes.SET_CHECKOUT_USER_SHIPMENT_INFO_TO_DB,
    checkoutSaveUserShipmentInfoToDb
  );
};

const onFetchCheckoutUserShipmentInfoFromDb = function* () {
  yield takeLatest(
    CheckoutActionTypes.FETCH_CHECKOUT_USER_SHIPMENT_INFO_FROM_DB,
    fetchCheckoutUserShipmentInfoFromDb
  );
};
export const checkoutSagas = function* () {
  yield all([
    call(onCheckoutSuccess),
    call(onCheckoutSaveUserShipmentInfotoDb),
    call(onFetchCheckoutUserShipmentInfoFromDb),
  ]);
};
