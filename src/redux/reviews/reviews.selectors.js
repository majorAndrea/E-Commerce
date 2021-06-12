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

export const usersReviewsAvgScoreSelector = createSelector(
  [usersReviewsSelector],
  (reviews) => {
    const totalReviews = reviews.length;
    const totalScore = reviews.reduce(
      (acc, currReview) => (acc += currReview.rating),
      0
    );
    const avgReviewsScore = Math.floor(totalScore / totalReviews);
    return avgReviewsScore || 0;
  }
);

export const isFetchingReviewsSelector = createSelector(
  [reviewsSelector],
  (reviews) => reviews.isFetching
);
