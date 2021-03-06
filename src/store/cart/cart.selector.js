import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector([selectCartReducer], (cart) => cart.isCartOpen);

export const selectCartItems = createSelector([selectCartReducer], (cart) => cart.cartItems);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    Math.floor(
      cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0) * 100
    ) / 100
);
