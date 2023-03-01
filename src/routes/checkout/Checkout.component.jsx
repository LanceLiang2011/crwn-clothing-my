import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles';
import {
  CheckouContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';

export default function Checkout() {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  return (
    <CheckouContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((item) => {
        const { id } = item;
        return <CheckoutItem key={id} cartItem={item} />;
      })}
      <Total>Total: ${total}</Total>
    </CheckouContainer>
  );
}
