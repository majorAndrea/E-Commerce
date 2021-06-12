import { createSelector } from "reselect";

const cartSelector = (state) => state.cart;

export const selectCartProducts = createSelector(
  [cartSelector],
  (cart) => cart.cartProducts
);

export const selectCartTotal = createSelector(
  [selectCartProducts],
  (cartProducts) =>
    cartProducts.reduce(
      (total, product) =>
        Number.parseFloat((total += product.price * product.qty)).toFixed(2),
      0
    )
);

export const selectCartQty = createSelector(
  [selectCartProducts],
  (cartProducts) =>
    cartProducts.reduce((total, product) => (total += product.qty), 0)
);
