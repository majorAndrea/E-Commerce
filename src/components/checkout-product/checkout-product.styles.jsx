import styled, { css } from "styled-components";

const fontLargerAndLighter = css`
  font-size: larger;
  font-weight: lighter;
`;

const displayFlexJustifyCenter = css`
  display: flex;
  justify-content: center;
`;

export const ProductDetailsContainer = styled.div`
  ${displayFlexJustifyCenter};
  align-items: center;
  background-color: #f8f9fa;
  color: black;
  margin-bottom: 1rem;

  > :nth-child(2) {
    ${fontLargerAndLighter};
  }

  > :nth-child(3) {
    ${fontLargerAndLighter};
  }

  > :first-child {
    padding-left: 0;
  }

  > :last-child {
    padding-right: 0;
  }
`;

export const QtyArrow = styled.span`
  padding: 0;
  font-size: x-large;
`;

export const ProductImageContainer = styled.img`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ProductQty = styled.span`
  font-size: x-large;
  padding: 0.25rem;
  font-weight: lighter;
`;

export const RemoveProductContainer = styled.div`
  ${displayFlexJustifyCenter};
  span {
    cursor: pointer;
    font-size: larger;
    align-self: center;
    padding: 0;
  }
`;
