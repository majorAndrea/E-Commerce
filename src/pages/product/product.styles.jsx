import styled, { css } from "styled-components";

const headingStyle = css`
  font-weight: lighter;
  font-size: xx-large;
`;

const fontLargerAndLighter = css`
  font-size: large;
  font-weight: lighter;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: ${(props) => props.objectfit};
  background-color: #f8f9fa;
`;

export const ListProduct = styled.div`
  > :first-child {
    padding-top: 0;
  }

  > :nth-child(2) {
    ${fontLargerAndLighter}
    font-size: larger;
  }
`;

export const ColorSelectContainer = styled.div`
  width: 30%;
`;

export const ProductName = styled.h2`
  padding: 0;
  margin: 0;
  ${headingStyle}
`;

export const ProductSpec = styled.span`
  display: block;
  margin-bottom: 0.25rem;
  ${fontLargerAndLighter}

  :last-child {
    margin-bottom: 0;
  }
`;

export const ProductDescHeading = styled.h3`
  display: block;
  margin-bottom: 0.5rem;
  ${headingStyle}
`;

export const ProductDesc = styled.p`
  ${fontLargerAndLighter}
`;
