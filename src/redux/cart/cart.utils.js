const findProduct = (listOfProducts, productToFind) => {
  return listOfProducts.find((product) => product.id === productToFind.id);
};

export const addProductToCart = (cartProducts, productToAdd) => {
  if (findProduct(cartProducts, productToAdd)) {
    return cartProducts.map((product) =>
      product.id === productToAdd.id
        ? { ...product, qty: product.qty + 1 }
        : product
    );
  } else {
    return [...cartProducts, { ...productToAdd, qty: 1 }];
  }
};

export const decreaseQtyProductFromCart = (cartProducts, productToDecrease) => {
  if (findProduct(cartProducts, productToDecrease).qty > 1) {
    return cartProducts.map((product) =>
      product.id === productToDecrease.id
        ? { ...product, qty: product.qty - 1 }
        : product
    );
  } else {
    return cartProducts.filter(
      (product) => product.id !== productToDecrease.id
    );
  }
};
