import { createSelector } from "reselect";

const selectReviews = (state) => state.reviews;

export const reviewsSelector = createSelector(
  [selectReviews],
  (reviews) => reviews
);

export const usersReviewsSelector = createSelector(
  [reviewsSelector],
  (reviews) => reviews.reviews
);

export const isFetchingReviewsSelector = createSelector(
  [reviewsSelector],
  (reviews) => reviews.isFetching
);
