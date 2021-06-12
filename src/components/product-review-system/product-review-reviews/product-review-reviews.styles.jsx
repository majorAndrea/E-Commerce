import styled from "styled-components";

export const ProductReviewReviewsHeading = styled.h3`
  font-weight: lighter;
  font-size: xx-large;
  display: block;
  margin-bottom: 0.5rem;
`;

export const ReviewsContainer = styled.div`
  max-height: 350px;
  overflow-y: scroll;

  .list-group-item:nth-child(2n) {
    background-color: #f8f9fa;
  }
`;
