import CustomAlertActionTypes from "./custom-alert.types.js";

// Details contains an object like {title, message}.
export const showCustomAlert = (details) => ({
  type: CustomAlertActionTypes.SHOW_CUSTOM_ALERT,
  payload: details,
});

export const hideCustomAlert = () => ({
  type: CustomAlertActionTypes.HIDE_CUSTOM_ALET,
});
