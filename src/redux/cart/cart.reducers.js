import CartActionTypes from "./cart.types.js";
import { addProductToCart, decreaseQtyProductFromCart } from "./cart.utils.js";

const INITIAL_STATE = {
  cartProducts: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cartProducts: addProductToCart(state.cartProducts, action.payload),
      };
    case CartActionTypes.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(product => product.id !== action.payload.id)
      }
    case CartActionTypes.DECREASE_QTY_PRODUCT_FROM_CART:
      return {
        ...state,
        cartProducts: decreaseQtyProductFromCart(state.cartProducts, action.payload)
      }
    default:
      return state;
  }
};

export default cartReducer;
