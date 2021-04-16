import CartActionTypes from "./cart.types.js";

export const addProductToCart = (product) => ({
  type: CartActionTypes.ADD_PRODUCT_TO_CART,
  payload: product,
});

export const decreaseQtyProductFromCart = (product) => ({
  type: CartActionTypes.DECREASE_QTY_PRODUCT_FROM_CART,
  payload: product,
});

export const removeProductFromCart = (product) => ({
  type: CartActionTypes.REMOVE_PRODUCT_FROM_CART,
  payload: product,
});
