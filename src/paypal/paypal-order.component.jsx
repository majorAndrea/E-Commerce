import React, { useEffect, useContext } from "react";
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
import { checkoutStartSelector } from "../redux/checkout/checkout.selectors.js";
import { CustomAlertContext } from "../providers/custom-alert/custom-alert.provider.jsx";

const PaypPalOrder = ({ amount, history, match, checkoutProcessSuccess }) => {
  const { setAlertDetails } = useContext(CustomAlertContext);

  // To hide error alert if showed.
  useEffect(() => {
    return () => setAlertDetails({ display: false });
  }, [setAlertDetails]);

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
    setAlertDetails({
      display: true,
      title: "Payment Aborted",
      message: "You have aborted your payment. We didn't charge you any cost.",
      variant: "danger",
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
});

const mapStatsToProps = createStructuredSelector({
  checkoutStart: checkoutStartSelector,
});

export default compose(
  connect(mapStatsToProps, mapDispatchToProps),
  withRouter
)(PaypPalOrder);
