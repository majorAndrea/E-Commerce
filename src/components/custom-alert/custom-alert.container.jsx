import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { customAlertSelector } from "../../redux/custom-alert/custom-alert.selectors.js";
import { hideCustomAlert } from "../../redux/custom-alert/custom-alert.actions.js";
import CustomAlert from "./custom-alert.component.jsx";

const mapStateToProps = createStructuredSelector({
  customAlert: customAlertSelector,
});

const mapDispatchToProps = (dispatch) => ({
  hideCustomAlert: () => dispatch(hideCustomAlert()),
});

const CustomAlertContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomAlert);

export default CustomAlertContainer;
