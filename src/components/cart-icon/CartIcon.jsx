import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import React, { useContext } from 'react';

export default function CartIcon() {
  const { setIsOpen } = useContext(CartContext);
  return (
    <div
      className='cart-icon-container'
      onClick={() => {
        setIsOpen((current) => !current);
      }}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>10</span>
    </div>
  );
}
