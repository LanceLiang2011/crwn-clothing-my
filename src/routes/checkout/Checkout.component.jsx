import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';

export default function Checkout() {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => {
        const { id } = item;
        return <CheckoutItem key={id} cartItem={item} />;
      })}
      <span className='total'>Total: ${total}</span>
    </div>
  );
}
