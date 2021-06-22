import { createSelector } from "reselect";

const selectCheckout = (state) => state.checkout;

export const checkoutSelector = createSelector(
  [selectCheckout],
  (checkout) => checkout
);

export const checkoutStartSelector = createSelector(
  [selectCheckout],
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
  [selectCheckout],
  (checkout) => checkout.checkoutPersonal
);

export const selectCheckoutInfoSpedition = createSelector(
  [selectCheckout],
  (checkout) => checkout.checkoutSpedition
);
