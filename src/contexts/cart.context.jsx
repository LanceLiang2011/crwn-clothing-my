import { createContext, useState } from 'react';

function newCartItems(cartItems, productToAdd) {
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

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
});

export default function CartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (productToAdd) => {
    setCartItems(newCartItems(cartItems, productToAdd));
  };

  const value = { isOpen, setIsOpen, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
