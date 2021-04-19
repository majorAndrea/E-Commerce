import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { checkoutSuccessSelector } from "../../redux/checkout/checkout.selectors.js";
import { selectCartProducts } from "../../redux/cart/cart.selectors.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CheckoutConfirm = ({ checkoutSuccess }) => {
  return (
    <article>
      <Row>
        <Col as="section" xs={12} md={8}>
          <h2>Order Received!</h2>
          Thank you {checkoutSuccess.payer.name.given_name}, your order n.
          {checkoutSuccess.id} is beign processed.
        </Col>
        <Col>
          <h2>Your order:</h2>
        </Col>
      </Row>
    </article>
  );
};

const mapStateToProps = createStructuredSelector({
  checkoutSuccess: checkoutSuccessSelector,
  cartProducts: selectCartProducts,
});

export default connect(mapStateToProps, null)(CheckoutConfirm);
