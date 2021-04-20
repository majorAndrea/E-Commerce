import CustomAlertActionTypes from "./custom-alert.types.js";

const INITIAL_STATE = {
  display: false,
  title: "No Title",
  message: "No message",
  variant: "secondary",
};

export const customAlertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CustomAlertActionTypes.SHOW_CUSTOM_ALERT:
      return {
        ...state,
        display: true,
        title: action.payload.title || "No Title",
        message: action.payload.message || "No Message",
        variant: action.payload.variant || "secondary",
      };
    case CustomAlertActionTypes.HIDE_CUSTOM_ALET:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default customAlertReducer;
