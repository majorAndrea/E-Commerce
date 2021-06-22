import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import CheckoutStepOne from "../../components/checkout-steps/step-one/checkout-step-one.component";
import CheckoutStepTwo from "../../components/checkout-steps/step-two/checkout-step-two.component";
import CheckoutStepThree from "../../components/checkout-steps/step-three/checkout-step-three.component";
import CheckoutStepFinal from "../../components/checkout-steps/step-final/checkout-step-final.component";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { createStructuredSelector } from "reselect";
import {
  selectCheckoutInfoPersonal,
  selectCheckoutInfoSpedition,
} from "../../redux/checkout/checkout.selectors";

const Checkout = ({ checkoutInfoPersonal, checkoutInfoSpedition }) => {
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
          <Route
            exact
            path="/checkout/steps/two"
            render={() =>
              checkoutInfoPersonal.email.length ? (
                <CheckoutStepTwo />
              ) : (
                <Redirect to="/checkout/steps/one" />
              )
            }
          />
          <Route
            exact
            path="/checkout/steps/three"
            render={() =>
              checkoutInfoSpedition.addressOne.length ? (
                <CheckoutStepThree />
              ) : (
                <Redirect to="/checkout/steps/two" />
              )
            }
          />
          <Route
            exact
            path="/checkout/steps/final"
            component={CheckoutStepFinal}
          />
          <Route path="/checkout/steps/*" render={() => <Redirect to="/" />} />
        </Switch>
      </Row>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  checkoutInfoPersonal: selectCheckoutInfoPersonal,
  checkoutInfoSpedition: selectCheckoutInfoSpedition,
});

export default connect(mapStateToProps, null)(Checkout);
