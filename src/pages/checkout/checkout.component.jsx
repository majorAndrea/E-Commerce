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
import Row from "react-bootstrap/Row";
import "./checkout.styles.css";

const Checkout = ({ cartProducts, cartTotal }) => {
  console.log(cartTotal);
  return (
    <section className="checkout-container">
      <Row className="checkout-header">
        <Col>Preview</Col>
        <Col>Name</Col>
        <Col>Price</Col>
        <Col>Quantity</Col>
        <Col>Remove</Col>
      </Row>
      {cartProducts.map((product) => (
        <CheckoutProductContainer key={product.id} product={product} />
      ))}
      <Row className="checkout-footer">
        <Col aria-hidden></Col>
        <Col aria-hidden></Col>
        <Col aria-hidden></Col>
        <Col>Total:</Col>
        <Col className="cart-total">&euro; {cartTotal}</Col>
      </Row>
      <Row className="checkout-pay-methods">
        <Col aria-hidden></Col>
        <Col aria-hidden></Col>
        <Col aria-hidden>Checkout Now:</Col>
        <Col>
          <PayPalOrder amount={cartTotal} />
        </Col>
      </Row>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  cartProducts: selectCartProducts,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
