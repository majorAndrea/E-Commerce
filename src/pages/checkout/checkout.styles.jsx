import styled, { css } from "styled-components";

const removePaddingX = css`
  > :first-child {
    padding-left: 0;
  }

  > :last-child {
    padding-right: 0;
  }
`;

export const CheckoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const CheckoutHeader = styled.section`
  padding: 1rem 0;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: #f8f9fa;
  color: black;
  text-align: center;

  ${removePaddingX}
`;

export const CheckoutFooter = styled.section`
  padding: 1rem 0;
  margin-bottom: 1rem;
  background-color: #f8f9fa;
  color: black;
  font-size: larger;
  font-weight: lighter;
  display: flex;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CartTotal = styled.span`
  font-weight: lighter;
  margin: 0;
  text-align: center;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
`;

export const CheckoutPayMethods = styled.section`
  margin-top: 1rem;
  font-size: larger;
  font-weight: lighter;
  text-align: center;
  display: flex;

  ${removePaddingX}

  > :nth-child(3) {
    padding: 0;
  }
`;
