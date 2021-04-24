import styled from "styled-components";

export const DropdownContainer = styled.section`
  position: relative;
`;

export const DropdownMenuContainer = styled.div`
  padding: 0.5rem !important;
  position: absolute !important;
  width: 275px;
  min-width: 200px;
`;

export const ProductsCartWrapper = styled.section`
  max-height: 350px;
  overflow: scroll;
`;

export const CartEmpty = styled.p`
  padding: 0;
  margin: 0.1rem 0 0.5rem 0;
  text-align: center;
`;

export const CartTotal = styled.span`
  text-align: end !important;
  padding: 0.1rem 0 !important;
  margin: 0.5rem 0 !important;
  display: block;
  background-color: #f8f9fa;
`;
