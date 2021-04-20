import CustomAlertActionTypes from "./custom-alert.types.js";

// Details contains an object like {title, message}.
export const showCustomAlert = (details) => ({
  type: CustomAlertActionTypes.SHOW_CUSTOM_ALERT,
  payload: details,
});

// Call this action on ComponentWillUnMount (or useEffect with cleanup function)
// to hide the message when the user go to another page.
export const hideCustomAlert = () => ({
  type: CustomAlertActionTypes.HIDE_CUSTOM_ALET,
});
