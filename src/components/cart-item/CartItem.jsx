import './cart-item.styles';
import { CartItemContainer, ItemDetails, Name } from './cart-item.styles';

export default function CartItem({ CartItem }) {
  const { name, price, quantity, imageUrl } = CartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className='price'>
          ({quantity}) * ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
}
