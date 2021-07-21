import styled from "styled-components";

export const ProductReviewFormHeading = styled.h3`
  font-weight: 300;
  font-size: x-large;
  display: block;
  margin-bottom: 0.5rem;
`;

export const SubmitReviewBtnContainer = styled.div`
  text-align: end;
`;

export const ReviewTextareaNoCurrentUserStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 12vh;
  font-weight: 300;
`;

export const PlaceholderSyle = styled.textarea`
  font-family: inherit;
  font-weight: 300;
  ::placeholder {
    font-weight: 300;
  }
`;
