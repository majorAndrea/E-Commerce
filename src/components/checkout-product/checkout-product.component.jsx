import React from "react";
import Col from "react-bootstrap/Col";
import {
  ProductDetailsContainer,
  QtyArrow,
  ProductImageContainer,
  ProductQty,
  RemoveProductContainer,
} from "./checkout-product.styles.jsx";

const CheckoutProduct = ({
  product,
  addProductToCart,
  removeProductFromCart,
  decreaseQtyProductFromCart,
}) => {
  const { background_image, name, price, qty } = product;
  return (
    <ProductDetailsContainer className="d-flex flex-column flex-md-row pt-4 pt-md-0">
      <ProductImageContainer as={Col} className="">
        <img src={background_image} alt="Preview of the article" />
      </ProductImageContainer>
      <Col className="mt-2 mt-md-0">{name}</Col>
      <Col className="mt-2 mt-md-0" aria-label="Price of article">
        &euro; {price}
      </Col>
      <Col className="mt-2 mt-md-0">
        <QtyArrow
          role="button"
          aria-label="Decrease quantity of this article"
          tabIndex="0"
          onClick={() => {
            decreaseQtyProductFromCart(product);
          }}
          onKeyUp={(e) => {
            if (e.code === "Enter") {
              decreaseQtyProductFromCart(product);
            }
          }}
        >
          &#10094;
        </QtyArrow>{" "}
        <ProductQty aria-label="Current Quantity of the article">
          {qty}
        </ProductQty>{" "}
        <QtyArrow
          role="button"
          aria-label="Increase Quantity of this article"
          tabIndex="0"
          onClick={() => {
            addProductToCart(product);
          }}
          onKeyUp={(e) => {
            if (e.code === "Enter") {
              addProductToCart(product);
            }
          }}
        >
          &#10095;
        </QtyArrow>
      </Col>
      <RemoveProductContainer as={Col} className="checkout-remove-product">
        <span
          role="button"
          className="ml-auto ml-md-0 p-3 p-md-0"
          aria-label="Remove this article from the cart"
          tabIndex="0"
          onClick={() => removeProductFromCart(product)}
          onKeyUp={(e) => {
            if (e.code === "Enter") {
              removeProductFromCart(product);
            }
          }}
        >
          &#10060;
        </span>
      </RemoveProductContainer>
    </ProductDetailsContainer>
  );
};

export default React.memo(CheckoutProduct);
