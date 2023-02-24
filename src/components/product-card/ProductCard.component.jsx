import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/Button.component';
import './product-card.styles.scss';

export default function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button
        onClick={() => {
          addItemToCart(product);
        }}
        buttonType='inverted'
      >
        Add to cart
      </Button>
    </div>
  );
}
