import { createSelector } from "reselect";

const selectCustomAlert = (state) => state.customAlert;

export const customAlertSelector = createSelector(
  [selectCustomAlert],
  (customAlert) => customAlert
);
