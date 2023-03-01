import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles';
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from './checkout-item.styles';

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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={handleRemove}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleAdd}>&#10095;</Arrow>
      </Quantity>
      <span className='price'>{price}</span>
      <RemoveButton onClick={handleClear}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}
