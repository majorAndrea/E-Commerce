import React from "react";
import PayPalOrder from "../../../paypal/paypal-order.component.jsx";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/user/user.selectors";
import {
  selectCartProducts,
  selectCartTotal,
} from "../../../redux/cart/cart.selectors.js";
import CheckoutProductContainer from "../../../components/checkout-product/checkout-product.container.js";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutFooter,
  CheckoutPayMethods,
  CartTotal,
} from "./checkout.styles";

const CheckoutStepFinal = ({ cartProducts, cartTotal, currentUser }) => {
  return (
    <Container className="mt-3">
      <CheckoutContainer as="article">
        <CheckoutHeader className="d-none d-md-flex">
          <Col>Preview</Col>
          <Col>Name</Col>
          <Col>Price</Col>
          <Col>Quantity</Col>
          <Col>Remove</Col>
        </CheckoutHeader>
        {cartProducts.map((product) => (
          <CheckoutProductContainer key={product.id} product={product} />
        ))}
        <CheckoutFooter>
          <Col aria-hidden></Col>
          <Col aria-hidden></Col>
          <Col aria-hidden></Col>
          <Col aria-hidden>Total:</Col>
          <Col>
            <CartTotal as={"span"} aria-label="total price order">
              &euro; {cartTotal}
            </CartTotal>
          </Col>
        </CheckoutFooter>
        <CheckoutPayMethods>
          <Col aria-hidden>
            <PayPalOrder amount={cartTotal} />
            {currentUser ? null : (
              <p className="text-muted">
                You must create an account before proceeding with the payment.
              </p>
            )}
          </Col>
          <Col aria-hidden></Col>
          <Col aria-hidden></Col>
          <Col aria-hidden></Col>
        </CheckoutPayMethods>
      </CheckoutContainer>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  cartProducts: selectCartProducts,
  cartTotal: selectCartTotal,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(CheckoutStepFinal);
