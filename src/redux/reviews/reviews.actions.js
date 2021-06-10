import ReviewsActionTypes from "./reviews.types";

export const fetchReviewsFromDb = (params) => ({
  type: ReviewsActionTypes.FETCH_REVIEWS_FROM_DB,
  payload: params,
});

export const fetchReviewsSuccess = (payload) => ({
  type: ReviewsActionTypes.FETCH_REVIEWS_SUCCESS,
  payload,
});

export const fetchReviewsFailure = (payload) => ({
  type: ReviewsActionTypes.FETCH_REVIEWS_FAILURE,
  payload,
});

export const addReviewToDb = (payload) => ({
  type: ReviewsActionTypes.ADD_REVIEW_TO_DB,
  payload,
});

export const addReviewToDbSuccess = () => ({
  type: ReviewsActionTypes.REVIEW_ADD_SUCCESS,
});

export const addReviewToDbFailure = (payload) => ({
  type: ReviewsActionTypes.REVIEW_ADD_FAILURE,
  payload,
});
