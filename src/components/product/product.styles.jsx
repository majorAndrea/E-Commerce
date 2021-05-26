import styled from "styled-components";

export const CardStyle = styled.section`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const CardImgWrapper = styled.div`
  height: 200px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const CardDescWrapper = styled.div`
  height: 80px;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  overflow: scroll;
`;
