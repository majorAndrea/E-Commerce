import React from "react";
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
import { showCustomAlert } from "../redux/custom-alert/custom-alert.actions.js";
import { checkoutStartSelector } from "../redux/checkout/checkout.selectors.js";

const PaypPalOrder = ({
  amount,
  history,
  match,
  checkoutProcessSuccess,
  showCustomAlert,
}) => {
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
      display: true,
      title: "Payment aborted",
      message: "You have aborted your payment.",
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
});

const mapStatsToProps = createStructuredSelector({
  checkoutStart: checkoutStartSelector,
});

export default compose(
  connect(mapStatsToProps, mapDispatchToProps),
  withRouter
)(PaypPalOrder);
