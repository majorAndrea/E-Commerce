import styled from "styled-components";

export const ProductContainer = styled.section`
  display: flex !important;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0;
  margin-bottom: 0.5rem;
  width: 25vh;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProductThumbnailContainer = styled.div`
  flex-basis: 35%;
  display: flex;
  height: 64px;
  margin-right: .2rem;
`;

export const ProductThumbnail = styled.img`
  height: 100%;
  width: 100%;
`;

export const ProductInfo = styled.div`
  flex-basis: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size:smaller;
`;
