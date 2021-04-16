import { call, all } from "redux-saga/effects";
import { productsSagas } from "./products/products.sagas.js";
import { userSagas } from "./user/users.sagas.js";

const rootSaga = function* () {
  yield all([call(productsSagas), call(userSagas)]);
};

export default rootSaga;
