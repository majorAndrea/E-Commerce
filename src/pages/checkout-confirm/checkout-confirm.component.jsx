import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { checkoutSuccessSelector } from "../../redux/checkout/checkout.selectors.js";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";
import Container from "react-bootstrap/Container";
import CartItem from "../../components/cart-item/cart-item.component.jsx";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

const CheckoutConfirm = ({ checkoutSuccess, currentUser }) => {
  return (
    <Container>
      <Row>
        <Col as="section" xs={12} md={8}>
          <Card>
            <Card.Body as="article">
              <h2>Order Received!</h2>
              <p>
                Thank you{" "}
                {currentUser?.displayName
                  ? currentUser.displayName
                  : checkoutSuccess.payer.name.given_name}
                , your order n.
                <strong>{checkoutSuccess.id}</strong> is beign processed.
                <br />
                You can review your order on the "<b>Your Order</b>" section.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col as="section" className="mt-4 mt-md-0">
          <ListGroup as="aside">
            <ListGroup.Item>
              <h2>Your order:</h2>
            </ListGroup.Item>
            {checkoutSuccess.products_bought.map((product) => (
              <ListGroup.Item key={product.id} as="article">
                <CartItem
                  productName={product.name}
                  qty={product.qty}
                  price={product.price}
                  image={product.background_image}
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  checkoutSuccess: checkoutSuccessSelector,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, null)(CheckoutConfirm);
