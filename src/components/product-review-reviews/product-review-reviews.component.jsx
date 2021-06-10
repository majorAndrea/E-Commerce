import React from "react";
import WithSpinner from "../with-spinner/with-spinner.component";
import ListGroup from "react-bootstrap/ListGroup";
import { ProductReviewReviewsHeading } from "./product-review-reviews.styles";
import UserProductReview from "../product-user-review/product-user-review.component";

const ProductReviewReviews = ({ reviews }) => {
  console.log(reviews);
  return (
    <>
      <ProductReviewReviewsHeading>Reviews</ProductReviewReviewsHeading>

      <ListGroup variant="flush">
        {reviews.map((review) => (
          <UserProductReview key={review.createdAt.seconds} details={review} />
        ))}
      </ListGroup>
    </>
  );
};

export default WithSpinner(ProductReviewReviews);
