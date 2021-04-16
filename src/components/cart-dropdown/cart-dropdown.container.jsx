import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCartProducts } from "../../redux/cart/cart.selectors.js";
import { selectCartQty } from "../../redux/cart/cart.selectors.js";
import { selectCartTotal } from "../../redux/cart/cart.selectors.js";
import CartDropDown from "./cart-dropdown.component.jsx";

const mapStateToProps = createStructuredSelector({
  cartProducts: selectCartProducts,
  cartTotal: selectCartTotal,
  cartQty: selectCartQty
});

const CartDropDownContainer = compose(
  withRouter,
  connect(mapStateToProps, null),
)(CartDropDown);

export default CartDropDownContainer;
