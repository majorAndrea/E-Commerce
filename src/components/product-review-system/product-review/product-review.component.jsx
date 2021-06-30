import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductReviewForm from "../../product-review-system/product-review-form/product-review-form.component";
import ProductReviewReviews from "../../product-review-system/product-review-reviews/product-review-reviews.component";
import { fetchReviewsFromDb } from "../../../redux/reviews/reviews.actions";
import {
  isFetchingReviewsSelector,
  usersReviewsSelector,
} from "../../../redux/reviews/reviews.selectors";

// This redux flow of fetching of reviews maybe should be moved in the ProductReviewReviews component
// to make it more reusable and to handle eventual errors more nicely, but I think for this App it
// make more sense to leave the logic just here.
const ProductReview = ({ fetchReviewsFromDb, isFetchingReviews, reviews }) => {
  const { superCategory, category, productId } = useParams();

  useEffect(() => {
    fetchReviewsFromDb({
      params: {
        superCategory,
        category,
        productId,
      },
    });
  }, [fetchReviewsFromDb, superCategory, category, productId]);

  return (
    <Row className="mb-3">
      <Col xs={12} md={6} as="section">
        <ProductReviewReviews
          isLoading={isFetchingReviews}
          spinnerVHPosition="30vh"
          reviews={reviews}
        />
      </Col>
      <Col xs={12} md={6} as="section" className="pt-4 pt-md-0">
        <ProductReviewForm />
      </Col>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchReviewsFromDb: (params) => dispatch(fetchReviewsFromDb(params)),
});

const mapStateToProps = createStructuredSelector({
  isFetchingReviews: isFetchingReviewsSelector,
  reviews: usersReviewsSelector,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductReview);
