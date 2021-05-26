import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import CartItem from "../cart-item/cart-item.component";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import {
  DropdownContainer,
  DropdownMenuContainer,
  ProductsCartWrapper,
  CartEmpty,
  CartTotal,
} from "./cart-dropdown-styles.jsx";

const CartDropDown = ({ cartProducts, cartTotal, cartQty, history }) => {
  const cartProductsLength = cartProducts.length;
  return (
    <DropdownContainer as={Dropdown}>
      <Dropdown.Toggle variant="success" size="sm" id="cart-dropdown-button">
        Cart <Badge variant="light">{cartQty}</Badge>
      </Dropdown.Toggle>
      <DropdownMenuContainer as={DropdownMenu} align="right">
        <ProductsCartWrapper>
          {cartProductsLength ? (
            cartProducts.map((product) => (
              <CartItem
                key={product.id}
                productName={product.name}
                qty={product.qty}
                price={product.price}
                image={product.background_image}
              />
            ))
          ) : (
            <CartEmpty>Your cart is empty.</CartEmpty>
          )}
        </ProductsCartWrapper>
        {cartProductsLength ? (
          <CartTotal>Total: &euro; {cartTotal}</CartTotal>
        ) : null}
        {cartProductsLength ? (
          <Button
            block
            variant="dark"
            onClick={() => {
              history.push("/checkout");
            }}
          >
            Checkout
          </Button>
        ) : (
          <Button block variant="dark" disabled>
            Checkout
          </Button>
        )}
      </DropdownMenuContainer>
    </DropdownContainer>
  );
};

export default CartDropDown;
