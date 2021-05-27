import styled, { css } from "styled-components";

const brighterBackground = css`
  filter: brightness(0.8);
  cursor: pointer;
`;

export const CategorySection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  overflow: hidden;
  padding: 0;
`;

export const CategoryName = styled.h3`
  position: absolute;
  font-size: larger;
  color: azure;
  cursor: pointer;
`;

export const Background = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.5);
  transition: filter 0.2s;
  border: 1px solid black;

  :hover {
    ${brighterBackground}
  }

  ${CategoryName}:hover & {
    ${brighterBackground}
  }
`;
