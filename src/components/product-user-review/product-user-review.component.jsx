import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {
  RatingStarsStyle,
  ReviewsTextStyle,
  ReviewsUsernameStyle,
} from "./product-user-review.styles";

const UserProductReview = ({ details }) => {
  const { reviewerDetails, rating, text, createdAt } = details;
  return (
    <ListGroup.Item className="pl-0">
      <div className="position-relative mb-2">
        <ReviewsUsernameStyle>
          {reviewerDetails.name} says:
        </ReviewsUsernameStyle>

        <RatingStarsStyle
          className="starability-result m-0 p-0 ml-3 fs-6 text-start"
          data-rating={String(rating)}
        >
          Rated: {String(rating)} stars
        </RatingStarsStyle>
      </div>

      <ReviewsTextStyle>{text}</ReviewsTextStyle>
    </ListGroup.Item>
  );
};

export default UserProductReview;
