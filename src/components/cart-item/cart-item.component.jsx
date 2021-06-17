import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import {
  ProductContainer,
  ProductThumbnailContainer,
  ProductThumbnail,
  ProductInfo,
} from "./cart-item.styles.jsx";

const CartItem = ({ productName, qty, price, image }) => {
  return (
    <ProductContainer as={Dropdown}>
      <ProductThumbnailContainer>
        <ProductThumbnail src={image} alt="One item of the cart" />
      </ProductThumbnailContainer>
      <ProductInfo>
        <span>
          <b>{productName}</b>
        </span>
        <span>
          Qty: <b>{qty}</b>
        </span>
        <span>&euro; {price}</span>
      </ProductInfo>
    </ProductContainer>
  );
};

export default React.memo(CartItem);
