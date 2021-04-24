import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { checkoutSuccessSelector } from "../../redux/checkout/checkout.selectors.js";
import { selectCartProducts } from "../../redux/cart/cart.selectors.js";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";
import Container from "react-bootstrap/Container";
import CartItem from "../../components/cart-item/cart-item.component.jsx";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CheckoutConfirm = ({ checkoutSuccess, currentUser, cartProducts }) => {
  return (
    <Container as="article">
      <Row>
        <Col as="section" xs={12} md={8}>
          <h2>Order Received!</h2>
          Thank you{" "}
          {currentUser.displayName || checkoutSuccess.payer.name.given_name},
          your order n.
          {checkoutSuccess.id} is beign processed.
        </Col>
        <Col as="section">
          <h2>Your order:</h2>
          {cartProducts.map((product) => (
            <CartItem
              key={product.id}
              productName={product.name}
              qty={product.qty}
              price={product.price}
              image={product.background_image}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  checkoutSuccess: checkoutSuccessSelector,
  cartProducts: selectCartProducts,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, null)(CheckoutConfirm);
