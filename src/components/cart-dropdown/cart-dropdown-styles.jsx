import styled from "styled-components";

export const DropdownContainer = styled.section`
  position: relative;
`;

export const DropdownMenuContainer = styled.div`
  padding: .5rem !important;
  position: absolute !important;
`;

export const ProductsCartWrapper = styled.section`
  max-height: 350px;
  overflow: scroll;
`;

export const CartEmpty = styled.p`
  padding: 0;
  margin: .10rem 0 .5rem 0;
  text-align: center;
`;

export const CartTotal = styled.span`
  text-align: end !important;
  padding: .1rem 0 !important;
  margin: .5rem 0 !important;
  display: block;
  background-color: #f8f9fa;
`;
