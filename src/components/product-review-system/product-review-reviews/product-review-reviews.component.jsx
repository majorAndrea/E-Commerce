import React from "react";
import WithSpinner from "../../with-spinner/with-spinner.component";
import ListGroup from "react-bootstrap/ListGroup";
import {
  ProductReviewReviewsHeading,
  ReviewsContainer,
  NoReviewsSpan,
} from "./product-review-reviews.styles";
import UserProductReview from "../product-user-review/product-user-review.component";

const ProductReviewReviews = ({ reviews }) => {
  return (
    <>
      <ProductReviewReviewsHeading>Reviews</ProductReviewReviewsHeading>

      <ReviewsContainer as={ListGroup} variant="flush" className="card rounded">
        {reviews.length ? (
          reviews.map((review) => (
            <UserProductReview
              key={review.createdAt.seconds}
              details={review}
            />
          ))
        ) : (
          <NoReviewsSpan className="mt-3 mb-3 p-3">
            This article does not have any reviews.
          </NoReviewsSpan>
        )}
      </ReviewsContainer>
    </>
  );
};

export default WithSpinner(ProductReviewReviews);
