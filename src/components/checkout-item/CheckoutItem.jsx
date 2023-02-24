import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removeItemAllFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const handleAdd = () => {
    addItemToCart(cartItem);
  };

  const handleRemove = () => {
    removeItemFromCart(cartItem);
  };

  const handleClear = () => {
    removeItemAllFromCart(cartItem);
  };
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <span onClick={handleRemove} className='arrow'>
          &#10094;
        </span>
        <span className='value'>{quantity}</span>
        <span onClick={handleAdd} className='arrow'>
          &#10095;
        </span>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={handleClear}>
        &#10005;
      </div>
    </div>
  );
}
