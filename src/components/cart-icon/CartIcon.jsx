import './cart-icon.styles';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import React, { useContext } from 'react';
import {
  CartIconContainer,
  ItemCount,
  StyledShoppingIcon,
} from './cart-icon.styles';

export default function CartIcon() {
  const { cartItems, setIsOpen } = useContext(CartContext);

  const totalQuantity = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <CartIconContainer
      onClick={() => {
        setIsOpen('toggle');
      }}
    >
      <StyledShoppingIcon />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
}
