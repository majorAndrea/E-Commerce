import { call, put, takeLatest, all } from "redux-saga/effects";
import { firestore } from "../../firebase";
import { fetchDataFailure, fetchDataSuccess } from "./products.actions.js";
import ProductsActionTypes from "./products.types.js";

const fetchDataStartAsync = function* () {
  try {
    const collectionRef = yield firestore.collection("products");
    const querySnapshot = yield collectionRef.get();
    const payload = yield [];
    yield querySnapshot.forEach((doc) => {
      payload.push(doc.data());
    });
    yield put(fetchDataSuccess(payload));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
};

const onFetchDataStart = function* () {
  yield takeLatest(ProductsActionTypes.FETCH_DATA_START, fetchDataStartAsync);
};

export const productsSagas = function* () {
  yield all([call(onFetchDataStart)]);
};
