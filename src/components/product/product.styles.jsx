import styled from "styled-components";

export const CardStyle = styled.section`
  display: flex;
  justify-content: space-between;
  height: 420px;
`;

export const CardHeading = styled.h3`
  font-weight: 300;
  font-size: 1.5rem;
`;

export const CardImgWrapper = styled.div`
  height: 200px;
  width: 100%;
`;

export const ProductImg = styled.img`
  height: inherit;
  width: inherit;
  object-fit: ${(props) => props.objectfit};
  background-color: #f8f9fa;
`;

export const CardDescWrapper = styled.div`
  height: 80px;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  overflow: scroll;
  font-weight: 300;
`;
