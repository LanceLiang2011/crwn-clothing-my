import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';
import { CartContext } from '../../contexts/cart.context';

import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLinksContainer,
} from './Navigation.styles.jsx';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const { isOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to={'/'}>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinksContainer>
          <NavLinks to={'/shop'}>SHOP</NavLinks>
          {currentUser ? (
            <NavLinks as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLinks>
          ) : (
            <NavLinks to={'/auth'}>SIGN IN</NavLinks>
          )}
          <CartIcon />
        </NavLinksContainer>
      </NavigationContainer>
      {isOpen && <CartDropdown />}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
