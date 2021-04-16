import Product from "./product.component.jsx";
import { connect } from "react-redux";
import { addProductToCart } from "../../redux/cart/cart.actions.js";
import { getProductSelector } from "../../redux/products/products.selectors.js";

const mapStateToProps = (
  state,
  {
    match: {
      params: { superCategory, category, productId },
    },
  }
) => ({
  product: getProductSelector(superCategory, category, productId)(state),
});

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (product) => dispatch(addProductToCart(product)),
});

const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Product);

export default ProductContainer;
