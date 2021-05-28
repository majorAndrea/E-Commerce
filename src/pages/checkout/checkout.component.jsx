import React from "react";
import PayPalOrder from "../../paypal/paypal-order.component.jsx";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartProducts,
  selectCartTotal,
} from "../../redux/cart/cart.selectors.js";
import CheckoutProductContainer from "../../components/checkout-product/checkout-product.container.js";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutFooter,
  CheckoutPayMethods,
  CartTotal,
} from "./checkout.styles";

const Checkout = ({ cartProducts, cartTotal }) => {
  return (
    <Container>
      <CheckoutContainer>
        <CheckoutHeader>
          <Col id="product-image">Preview</Col>
          <Col id="product-name">Name</Col>
          <Col id="product-price">Price</Col>
          <Col id="product-quantity">Quantity</Col>
          <Col id="remove-product">Remove</Col>
        </CheckoutHeader>
        {cartProducts.map((product) => (
          <CheckoutProductContainer key={product.id} product={product} />
        ))}
        <CheckoutFooter>
          <Col aria-hidden></Col>
          <Col aria-hidden></Col>
          <Col aria-hidden></Col>
          <Col as="span" id="total-price">
            Total:
          </Col>
          <CartTotal as={"span"} aria-labelledby="total-price">
            &euro; {cartTotal}
          </CartTotal>
        </CheckoutFooter>
        <CheckoutPayMethods>
          <Col aria-hidden></Col>
          <Col aria-hidden></Col>
          <Col aria-hidden>Pay Now:</Col>
          <Col>
            <PayPalOrder amount={cartTotal} />
          </Col>
        </CheckoutPayMethods>
      </CheckoutContainer>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  cartProducts: selectCartProducts,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
