import { takeLatest, put, call, all } from "redux-saga/effects";
import { firestore } from "../../firebase/";
import ReviewsActionTypes from "./reviews.types";
import {
  addReviewToDbSuccess,
  addReviewToDbFailure,
  fetchReviewsSuccess,
  fetchReviewsFailure,
} from "./reviews.actions";

const fetchReviewsFromFirebase = function* ({
  payload: {
    params: { superCategory, category, productId },
  },
}) {
  try {
    const reviewsBuffer = yield [];
    const reviewsRef = yield firestore
      .collection("reviews")
      .where("productDetails.superCategory", "==", superCategory)
      .where("productDetails.category", "==", category)
      .where("productDetails.productId", "==", productId)
      .orderBy("createdAt", "desc");
    const querySnapshot = yield reviewsRef.get();
    yield querySnapshot.forEach((doc) => {
      reviewsBuffer.push(doc.data());
    });
    yield put(fetchReviewsSuccess(reviewsBuffer));
  } catch (error) {
    yield put(fetchReviewsFailure(error));
  }
};

const addReviewToFirebase = function* ({ payload }) {
  try {
    const { type, productDetails, ...otherData } = yield payload;
    yield firestore.collection("reviews").add({ productDetails, ...otherData });
    yield put(addReviewToDbSuccess());
    // Structure the payload to be destructured fine in fetchReviewsFromFirebase
    payload = yield { payload: { params: { ...productDetails } } };
    yield fetchReviewsFromFirebase(payload);
  } catch (error) {
    yield put(addReviewToDbFailure(error));
  }
};

const onReviewAddToDb = function* () {
  yield takeLatest(ReviewsActionTypes.ADD_REVIEW_TO_DB, addReviewToFirebase);
};

const onFetchReviewsFromDb = function* () {
  yield takeLatest(
    ReviewsActionTypes.FETCH_REVIEWS_FROM_DB,
    fetchReviewsFromFirebase
  );
};

export const reviewsSagas = function* () {
  yield all([call(onReviewAddToDb), call(onFetchReviewsFromDb)]);
};
