import './cart-dropdown.styles.scss';
import Button from '../button/Button.component';
import CartItem from '../cart-item/CartItem';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} CartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}
