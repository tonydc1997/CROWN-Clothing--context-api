import React, { createContext, useState, useEffect } from 'react';
import { removeItemFromCart, addItemToCart } from './cart.utils';

const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
});
