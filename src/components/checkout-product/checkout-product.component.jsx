import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {
  ProductDetailsContainer,
  QtyArrow,
  ProductImageContainer,
  ProductQty,
  RemoveProductContainer,
} from "./checkout.styles.jsx";

const CheckoutProduct = ({
  product,
  addProductToCart,
  removeProductFromCart,
  decreaseQtyProductFromCart,
}) => {
  const { background_image, name, price, qty } = product;
  return (
    <ProductDetailsContainer>
      <ProductImageContainer as={Col}>
        <img src={background_image} alt="Product" />
      </ProductImageContainer>
      <Col>{name}</Col>
      <Col>&euro; {price}</Col>
      <Col>
        <QtyArrow
          role="button"
          aria-labelledby="product-quantity"
          aria-label="Decrease quantity of this article"
          onClick={() => {
            decreaseQtyProductFromCart(product);
          }}
        >
          &#10094;
        </QtyArrow>{" "}
        <ProductQty
          id="product-quantity"
          aria-label="Current Quantity of the product"
        >
          {qty}
        </ProductQty>{" "}
        <QtyArrow
          role="button"
          aria-labelledby="product-quantity"
          aria-label="Increase Quantity of this article"
          onClick={() => {
            addProductToCart(product);
          }}
        >
          &#10095;
        </QtyArrow>
      </Col>
      <RemoveProductContainer as={Col} className="checkout-remove-product">
        <span
          role="button"
          aria-label="Remove this article from the cart"
          onClick={() => removeProductFromCart(product)}
        >
          &#10060;
        </span>
      </RemoveProductContainer>
    </ProductDetailsContainer>
  );
};

export default CheckoutProduct;
