import { createSelector } from "reselect";

const cartSelector = (state) => state.cart;

export const selectCartProducts = createSelector(
  [cartSelector],
  (cart) => cart.cartProducts
);

export const selectCartTotal = createSelector(
  [selectCartProducts],
  (cartProducts) =>
    Number.parseFloat(
      cartProducts
        .reduce((total, product) => (total += product.price * product.qty), 0)
        .toFixed(2)
    )
);

export const selectCartQty = createSelector(
  [selectCartProducts],
  (cartProducts) =>
    cartProducts.reduce((total, product) => (total += product.qty), 0)
);
