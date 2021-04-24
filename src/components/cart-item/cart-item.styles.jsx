import styled from "styled-components";

export const ProductContainer = styled.section`
  display: flex !important;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProductThumbnailContainer = styled.div`
  flex-basis: 35%;
  display: flex;
  height: 68px;
  margin-right: 0.2rem;
`;

export const ProductThumbnail = styled.img`
  height: 100%;
  width: 100%;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: smaller;
`;
