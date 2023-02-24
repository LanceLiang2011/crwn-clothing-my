import { createContext, useState } from 'react';

function newAddCartItems(cartItems, productToAdd) {
  const existedItem = cartItems.find((item) => item.id === productToAdd.id);
  if (!existedItem) {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }

  return cartItems.map((item) => {
    if (item.id === productToAdd.id)
      return { ...item, quantity: item.quantity + 1 };
    return item;
  });
}

function newremoveCartItems(cartItems, productToRemove) {
  const existedItem = cartItems.find((item) => item.id === productToRemove.id);
  if (existedItem.quantity <= 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }
  return cartItems.map((item) => {
    if (item.id === productToRemove.id)
      return { ...item, quantity: item.quantity - 1 };
    return item;
  });
}

function newremoveallCartItems(cartItems, productToRemove) {
  return cartItems.filter((item) => item.id !== productToRemove.id);
}

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  removeItemAllFromCart: () => null,
});

export default function CartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(newAddCartItems(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(newremoveCartItems(cartItems, productToRemove));
  };

  const removeItemAllFromCart = (productToRemove) => {
    setCartItems(newremoveallCartItems(cartItems, productToRemove));
  };

  const value = {
    isOpen,
    setIsOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    removeItemAllFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
