import styled from "styled-components";

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

  > .col:first-child {
    padding-left: 0;
  }

  > .col:last-child {
    padding-right: 0;
  }
`;

export const CheckoutFooter = styled.section`
  padding: 1rem 0;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: #f8f9fa;
  color: black;
  font-size: x-large;
  font-weight: lighter;
  text-align: center;

  > .col:last-child {
    padding-right: 0;
  }

  > .col:first-child {
    padding-left: 0;
  }

  > .cart-total {
    font-weight: lighter;
    margin: 0;
    text-align: center;
  }
`;

export const CheckoutPayMethods = styled.section`
  margin-top: 1rem;
  font-size: x-large;
  font-weight: lighter;
  text-align: center;
  display: flex;

  > .col:last-child {
    padding-right: 0;
  }

  > .col:first-child {
    padding-left: 0;
  }
`;
