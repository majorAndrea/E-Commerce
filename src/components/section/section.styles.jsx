import styled, { css } from "styled-components";

const brighterBackgroundAndScaling = css`
  filter: brightness(0.75);
  transform: scale(1.1);
  cursor: pointer;
`;

export const CategoryName = styled.h3`
  position: absolute;
  font-size: larger;
  color: azure;
  cursor: pointer;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.5);
  transition: filter 0.2s ease-out, transform 5s 0.15s linear;
`;

export const CategorySection = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15rem;
  overflow: hidden;
  padding: 0;
  border: 1px solid black;

  &:hover ${Background}, &:hover ${CategoryName} ${Background} {
    ${brighterBackgroundAndScaling}
  }

  &:focus ${Background}, &:focus ${CategoryName} ${Background} {
    ${brighterBackgroundAndScaling}
  }

  &:not(:hover) ${Background}, &:hover ${CategoryName} ${Background} {
    transition: none;
  }
`;
