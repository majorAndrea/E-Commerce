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
    <ProductDetailsContainer className="d-flex flex-column flex-sm-row">
      <ProductImageContainer as={Col}>
        <img
          src={background_image}
          alt="Preview of this product"
          aria-labelledby="product-image"
        />
      </ProductImageContainer>
      <Col aria-labelledby="product-name" className="mt-2 mt-sm-0">
        {name}
      </Col>
      <Col aria-labelledby="product-price">&euro; {price}</Col>
      <Col>
        <QtyArrow
          role="button"
          aria-labelledby="product-quantity"
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
          aria-labelledby="remove-product"
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
