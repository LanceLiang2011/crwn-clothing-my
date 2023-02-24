import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import React, { useContext } from 'react';

export default function CartIcon() {
  const { cartItems, setIsOpen } = useContext(CartContext);

  const totalQuantity = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <div
      className='cart-icon-container'
      onClick={() => {
        setIsOpen((current) => !current);
      }}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{totalQuantity}</span>
    </div>
  );
}
