import { createSelector } from "reselect";

const selectCheckout = (state) => state.checkout;

export const checkoutSelector = createSelector(
  [selectCheckout],
  (checkout) => checkout
);

export const checkoutStartSelector = createSelector(
  [checkoutSelector],
  (checkout) => checkout.start
);

export const checkoutSuccessSelector = createSelector(
  [checkoutSelector],
  (checkout) => checkout.success
);

export const checkoutFailureSelector = createSelector(
  [checkoutSelector],
  (checkout) => checkout.failure
);

export const checkoutCancelSelector = createSelector(
  [checkoutSelector],
  (checkout) => checkout.cancel
);

export const selectCheckoutInfoPersonal = createSelector(
  [checkoutSelector],
  (checkout) =>
    checkout.checkoutPersonal
      ? checkout.checkoutPersonal
      : {
          firstname: "",
          lastname: "",
          email: "",
        }
);

export const selectCheckoutInfoShipment = createSelector(
  [checkoutSelector],
  (checkout) =>
    checkout.checkoutShipment
      ? checkout.checkoutShipment
      : {
          country: "",
          state: "",
          city: "",
          zipCode: "",
          addressOne: "",
          addressTwo: "",
        }
);

export const selectCheckoutFailure = createSelector(
  [checkoutSelector],
  (checkout) => checkout.failure
);
