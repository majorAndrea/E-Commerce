import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { usersReviewsAvgScoreSelector } from "../../../redux/reviews/reviews.selectors";
import { StarsStyle } from "./product-stars.styles";

const ProductStars = ({ avgOfReviewsScore }) => {
  return (
    <StarsStyle
      className="starability-result m-0 p-0 mt-1 fs-6"
      data-rating={String(avgOfReviewsScore)}
    >
      Rated: {String(avgOfReviewsScore)} stars
    </StarsStyle>
  );
};

const mapStateToProps = createStructuredSelector({
  avgOfReviewsScore: usersReviewsAvgScoreSelector,
});

export default connect(mapStateToProps, null)(ProductStars);
