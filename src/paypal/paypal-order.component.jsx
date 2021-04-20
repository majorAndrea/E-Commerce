import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { withRouter } from "react-router-dom";
import {
  checkoutProcessStart,
  checkoutProcessCancel,
  checkoutProcessSuccess,
  checkoutProcessFail,
} from "../redux/checkout/checkout.actions.js";
import {
  showCustomAlert,
  hideCustomAlert,
} from "../redux/custom-alert/custom-alert.actions.js";
import { checkoutStartSelector } from "../redux/checkout/checkout.selectors.js";

const PaypPalOrder = ({
  amount,
  history,
  match,
  checkoutProcessSuccess,
  showCustomAlert,
  hideCustomAlert,
}) => {
  // To hide error alert if showed.
  useEffect(() => {
    return () => hideCustomAlert();
  }, [hideCustomAlert]);

  const createOrder = (data, actions) => {
    return actions.order.create({
      intent: "capture",
      purchase_units: [
        {
          amount: {
            value: amount,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      checkoutProcessSuccess(details);
      history.push(`${match.url}/${details.id}`);
    });
  };

  const onError = (err) => {
    alert(err);
    console.log(err);
  };

  const onCancel = (data, actions) => {
    showCustomAlert({
      title: "Payment aborted",
      message: "You have aborted your payment. We didn't charge you any cost.",
      // variant: "danger",
    });
  };

  return (
    <PayPalButtons
      createOrder={createOrder}
      forceReRender={[amount]}
      style={{ layout: "horizontal", color: "gold" }}
      onApprove={onApprove}
      onError={onError}
      onCancel={onCancel}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkoutProcessStart: () => dispatch(checkoutProcessStart()),
  checkoutProcessSuccess: (details) =>
    dispatch(checkoutProcessSuccess(details)),
  checkoutProcessFail: (details) => dispatch(checkoutProcessFail(details)),
  checkoutProcessCancel: (details) => dispatch(checkoutProcessCancel(details)),
  showCustomAlert: (details) => dispatch(showCustomAlert(details)),
  hideCustomAlert: () => dispatch(hideCustomAlert()),
});

const mapStatsToProps = createStructuredSelector({
  checkoutStart: checkoutStartSelector,
});

export default compose(
  connect(mapStatsToProps, mapDispatchToProps),
  withRouter
)(PaypPalOrder);
