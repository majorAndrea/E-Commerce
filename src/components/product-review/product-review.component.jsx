import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ProductReviewForm from "../product-review-form/product-review-form.component";
import ProductReviewReviews from "../product-review-reviews/product-review-reviews.component";

const ProductReview = () => {
  return (
    <Row>
      <Col xs={12} md={6} as="section">
        <ProductReviewReviews />
      </Col>
      <Col xs={12} md={6} as="section">
        <ProductReviewForm />
      </Col>
    </Row>
  );
};

export default ProductReview;
