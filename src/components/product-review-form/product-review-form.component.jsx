import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  ProductReviewFormHeading,
  SubmitReviewBtnContainer,
} from "./product-review-form.styles";
import { addReviewToDb } from "../../redux/reviews/reviews.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";

const ProductReviewForm = ({ addReviewToDb, currentUser }) => {
  const { superCategory, category, productId } = useParams();

  const [reviewDetails, setReviewDetails] = useState({
    rating: 1,
    text: "",
    productDetails: {
      superCategory,
      category,
      productId,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    reviewDetails.reviewerDetails = {
      id: currentUser.id,
      name: currentUser.displayName,
    };
    reviewDetails.createdAt = new Date();
    addReviewToDb(reviewDetails);
  };

  return (
    <>
      <ProductReviewFormHeading>Leave a Review</ProductReviewFormHeading>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          controlId="ratingStartControl"
          className="mb-2 p-0"
          style={{ height: "2.4em" }}
        >
          <fieldset className="starability-basic position-relative">
            <input
              type="radio"
              id="second-rate1"
              name="rating"
              value="1"
              onChange={() => setReviewDetails({ ...reviewDetails, rating: 1 })}
            />
            <label
              htmlFor="second-rate1"
              title="Terrible"
              className="pb-0 mb-0"
            >
              1 star
            </label>
            <input
              type="radio"
              id="second-rate2"
              name="rating"
              value="2"
              onChange={() => setReviewDetails({ ...reviewDetails, rating: 2 })}
            />
            <label
              htmlFor="second-rate2"
              title="Not good"
              className="pb-0 mb-0"
            >
              2 stars
            </label>
            <input
              type="radio"
              id="second-rate3"
              name="rating"
              value="3"
              onChange={() => setReviewDetails({ ...reviewDetails, rating: 3 })}
            />
            <label htmlFor="second-rate3" title="Average" className="pb-0 mb-0">
              3 stars
            </label>
            <input
              type="radio"
              id="second-rate4"
              name="rating"
              value="4"
              onChange={() => setReviewDetails({ ...reviewDetails, rating: 4 })}
            />
            <label
              htmlFor="second-rate4"
              title="Very good"
              className="pb-0 mb-0"
            >
              4 stars
            </label>
            <input
              type="radio"
              id="second-rate5"
              name="rating"
              value="5"
              onChange={() => setReviewDetails({ ...reviewDetails, rating: 5 })}
            />
            <label htmlFor="second-rate5" title="Amazing" className="pb-0 mb-0">
              5 stars
            </label>
          </fieldset>
        </Form.Group>
        <Form.Group controlId="textAreaFormControl">
          <Form.Label hidden>Write your review here:</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Write here your review."
            value={reviewDetails.text}
            onChange={(e) =>
              setReviewDetails({ ...reviewDetails, text: e.target.value })
            }
          />
        </Form.Group>
        <SubmitReviewBtnContainer>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </SubmitReviewBtnContainer>
      </Form>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addReviewToDb: (reviewDetails) => dispatch(addReviewToDb(reviewDetails)),
});

export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(ProductReviewForm)
);
