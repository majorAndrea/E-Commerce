import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {
  RatingStarsStyle,
  ReviewsTextStyle,
  ReviewsUsernameStyle,
} from "./product-user-review.styles";

const UserProductReview = ({ details }) => {
  const { reviewerDetails, rating, text, createdAt } = details;

  const normalizeDate = () => {
    const date = createdAt.toDate();
    const day = `${date.getDate()}`.padStart(2, "0");
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <ListGroup.Item className="pl-3">
      <article className="position-relative mb-2">
        <ReviewsUsernameStyle>
          {reviewerDetails.name} says:
        </ReviewsUsernameStyle>

        <ReviewsTextStyle>{normalizeDate()}</ReviewsTextStyle>

        <RatingStarsStyle
          className="starability-result"
          data-rating={String(rating)}
        >
          Rated: {String(rating)} stars
        </RatingStarsStyle>
      </article>

      <ReviewsTextStyle>{text}</ReviewsTextStyle>
    </ListGroup.Item>
  );
};

export default UserProductReview;
