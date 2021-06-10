import { call, all } from "redux-saga/effects";
import { productsSagas } from "./products/products.sagas";
import { userSagas } from "./user/users.sagas";
import { checkoutSagas } from "./checkout/checkout.sagas";
import { reviewsSagas } from "./reviews/reviews.sagas";

const rootSaga = function* () {
  yield all([
    call(productsSagas),
    call(userSagas),
    call(checkoutSagas),
    call(reviewsSagas),
  ]);
};

export default rootSaga;
