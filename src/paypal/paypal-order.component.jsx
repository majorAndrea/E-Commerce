import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypPalOrder = ({ amount }) => {
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
    return actions.order
      .capture()
      .then((details) =>
        alert("Successfull payment by " + details.payer.name.given_name)
      );
  };
  return (
    <PayPalButtons
      createOrder={createOrder}
      forceReRender={[amount]}
      style={{ layout: "horizontal", color: "gold" }}
      onApprove={onApprove}
    />
  );
};

export default PaypPalOrder;
