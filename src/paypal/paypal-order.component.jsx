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
  return (
    <PayPalButtons
      createOrder={createOrder}
      forceReRender={[amount]}
      style={{ layout: "horizontal", color: "gold" }}
    />
  );
};

export default PaypPalOrder;
