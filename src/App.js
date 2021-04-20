import React, { useEffect, useContext, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./pages/main/main.component";
import Header from "./components/header/header.component";
import Container from "react-bootstrap/Container";
import SignInUp from "./pages/sign-in-up/sign-in-up.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors.js";
import { isUserLoggedIn } from "./redux/user/user.actions.js";
import Products from "./pages/products/products.component.jsx";
import ProductContainer from "./pages/product/product.container.js";
import Checkout from "./pages/checkout/checkout.component.jsx";
import CheckoutConfirm from "./pages/checkout-confirm/checkout-confirm.component.jsx";
import CustomAlertContainer from "./components/custom-alert/custom-alert.container.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = ({ currentUser, isUserLoggedIn }) => {
  useEffect(() => {
    isUserLoggedIn();
  }, [isUserLoggedIn]);
  return (
    <div>
      <Header />
      <Container as="main" className="main-container">
        <CustomAlertContainer />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <SignInUp />)}
          />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/checkout/:orderId/" component={CheckoutConfirm} />
          <Route exact path="/:superCategory/:category" component={Products} />
          <Route
            exact
            path="/:superCategory/:category/:productId"
            component={ProductContainer}
          />
        </Switch>
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  isUserLoggedIn: () => dispatch(isUserLoggedIn()),
});

const mapStatsToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStatsToProps, mapDispatchToProps)(App);
