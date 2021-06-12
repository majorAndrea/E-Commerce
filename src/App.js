import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors.js";
import { isUserLoggedIn } from "./redux/user/user.actions.js";
import CustomAlert from "./components/custom-alert/custom-alert.component.jsx";
import { CustomAlertProvider } from "./providers/custom-alert/custom-alert.provider.jsx";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Footer from "./components/footer/footer.component.jsx";
import Spinner from "./components/spinner/spinner.component";
import "./assets/styles/starability-basic-min.css";
import "./App.css";

const Main = React.lazy(() => import("./pages/main/main.component"));
const SignInUp = React.lazy(() =>
  import("./pages/sign-in-up/sign-in-up.component")
);
const Checkout = React.lazy(() =>
  import("./pages/checkout/checkout.component")
);
const CheckoutConfirm = React.lazy(() =>
  import("./pages/checkout-confirm/checkout-confirm.component")
);
const Products = React.lazy(() =>
  import("./pages/products/products.component")
);
const Product = React.lazy(() => import("./pages/product/product.container"));

const App = ({ currentUser, isUserLoggedIn }) => {
  useEffect(() => {
    isUserLoggedIn();
  }, [isUserLoggedIn]);
  return (
    <div className="wrapper">
      <Header />
      <ErrorBoundary>
        <CustomAlertProvider>
          <CustomAlert />

          <React.Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route
                exact
                path="/signin"
                render={() =>
                  currentUser ? <Redirect to="/" /> : <SignInUp />
                }
              />

              <Route exact path="/checkout" component={Checkout} />

              <Route
                exact
                path="/checkout/:orderId"
                component={CheckoutConfirm}
              />

              <Route
                exact
                path="/:superCategory/:category"
                component={Products}
              />

              <Route
                exact
                path="/:superCategory/:category/:productId"
                component={Product}
              />
            </Switch>
          </React.Suspense>
        </CustomAlertProvider>
      </ErrorBoundary>
      <Footer />
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
