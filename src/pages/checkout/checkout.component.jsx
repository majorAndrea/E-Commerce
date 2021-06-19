import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CheckoutStepOne from "../../components/checkout-steps/step-one/checkout-step-one.component";
import CheckoutStepTwo from "../../components/checkout-steps/step-two/checkout-step-two.component";
import CheckoutStepThree from "../../components/checkout-steps/step-three/checkout-step-three.component";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Checkout = () => {
  return (
    <Container>
      <Row>
        <Col md="5" xl="6" as="section">
          <h2>Order billing details</h2>
          <p className="lead">
            Before you can continue with your order, we need some more
            information.
          </p>
        </Col>
        <Switch>
          <Route exact path="/checkout/steps/one" component={CheckoutStepOne} />
          <Route exact path="/checkout/steps/two" component={CheckoutStepTwo} />
          <Route
            exact
            path="/checkout/steps/three"
            component={CheckoutStepThree}
          />
          <Route path="/checkout/steps/*" render={() => <Redirect to="/" />} />
        </Switch>
      </Row>
    </Container>
  );
};

export default Checkout;
