import { call, all } from "redux-saga/effects";
import { productsSagas } from "./products/products.sagas.js";
import { userSagas } from "./user/users.sagas.js";
import { checkoutSagas } from "./checkout/checkout.sagas.js";

const rootSaga = function* () {
  yield all([call(productsSagas), call(userSagas), call(checkoutSagas)]);
};

export default rootSaga;
