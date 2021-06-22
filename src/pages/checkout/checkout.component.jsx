import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import CheckoutStepOne from "../../components/checkout-steps/step-one/checkout-step-one.component";
import CheckoutStepTwo from "../../components/checkout-steps/step-two/checkout-step-two.component";
import CheckoutStepThree from "../../components/checkout-steps/step-three/checkout-step-three.component";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "react-bootstrap/Container";
import { createStructuredSelector } from "reselect";
import {
  selectCheckoutInfoPersonal,
  selectCheckoutInfoSpedition,
} from "../../redux/checkout/checkout.selectors";

const Checkout = ({ checkoutInfoPersonal, checkoutInfoSpedition }) => {
  let location = useLocation();

  const pathnameArray = location.pathname.split("/");
  const pathnameIndex = pathnameArray.length - 1;
  const currentStep = pathnameArray[pathnameIndex];
  const mapStepToValue = {
    one: 20,
    two: 60,
    three: 100,
  };

  return (
    <Container>
      <Row>
        <Col as="section">
          <div className="d-flex flex-column justify-content-between">
            <h2>Order billing details</h2>
            <p className="lead">
              Before you can continue with your order, we need some more
              information.
            </p>
          </div>
          <div className="mb-4 mt-2">
            <hr className="d-none d-sm-block" />
            <ProgressBar
              now={mapStepToValue[currentStep]}
              label={`${mapStepToValue[currentStep]}%`}
              variant="success"
              srOnly
            ></ProgressBar>
            <hr className="d-block d-sm-none" />
          </div>
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
            path="/checkout/steps/*"
            render={() => <Redirect to="/checkout/steps/one" />}
          />
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
