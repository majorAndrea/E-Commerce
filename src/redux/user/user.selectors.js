import { createSelector } from "reselect";

const userSelector = (state) => state.user;

export const selectCurrentUser = createSelector(
  [userSelector],
  (user) => user.currentUser
);

export const selectUserCheckoutInfoPersonal = createSelector(
  [userSelector],
  (user) => user.checkoutPersonal
);

export const selectUserCheckoutInfoSpedition = createSelector(
  [userSelector],
  (user) => user.checkoutSpedition
);
