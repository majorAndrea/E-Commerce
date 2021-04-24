import CheckoutProduct from "./checkout-product.component.jsx";
import { connect } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
  decreaseQtyProductFromCart,
} from "../../redux/cart/cart.actions.js";

const mapDispatchToProps = (dispatch) => ({
  removeProductFromCart: (product) => dispatch(removeProductFromCart(product)),
  addProductToCart: (product) => dispatch(addProductToCart(product)),
  decreaseQtyProductFromCart: (product) =>
    dispatch(decreaseQtyProductFromCart(product)),
});

const CheckoutProductContainer = connect(
  null,
  mapDispatchToProps
)(CheckoutProduct);

export default CheckoutProductContainer;
