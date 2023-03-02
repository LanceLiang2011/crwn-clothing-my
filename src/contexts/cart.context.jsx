import { createContext, useReducer } from 'react';

// function newAddCartItems(cartItems, productToAdd) {
//   const existedItem = cartItems.find((item) => item.id === productToAdd.id);
//   if (!existedItem) {
//     return [...cartItems, { ...productToAdd, quantity: 1 }];
//   }

//   return cartItems.map((item) => {
//     if (item.id === productToAdd.id)
//       return { ...item, quantity: item.quantity + 1 };
//     return item;
//   });
// }

// function newremoveCartItems(cartItems, productToRemove) {
//   const existedItem = cartItems.find((item) => item.id === productToRemove.id);
//   if (existedItem.quantity <= 1) {
//     return cartItems.filter((item) => item.id !== productToRemove.id);
//   }
//   return cartItems.map((item) => {
//     if (item.id === productToRemove.id)
//       return { ...item, quantity: item.quantity - 1 };
//     return item;
//   });
// }

// function newremoveallCartItems(cartItems, productToRemove) {
//   return cartItems.filter((item) => item.id !== productToRemove.id);
// }

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  removeItemAllFromCart: () => null,
});

const INITIAL_STATE = { isOpen: false, cartItems: [] };

const ACTION_TYPES = {
  ADD_ITEM: 'ADD_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
  CLEAR_ITEMS: 'CLEAR_ITEMS',
  SET_OPEN: 'SET_OPEN',
  TOGGLE_OPEN: 'TOGGLE_OPEN',
};
const cartReducer = (state, { type, payload }) => {
  const { cartItems } = state;
  switch (type) {
    case ACTION_TYPES.ADD_ITEM: {
      const existedItem = cartItems.find((item) => item.id === payload.id);
      if (!existedItem) {
        return {
          ...state,
          cartItems: [...cartItems, { ...payload, quantity: 1 }],
        };
      }
      return {
        ...state,
        cartItems: cartItems.map((item) => {
          if (item.id === payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        }),
      };
    }
    case ACTION_TYPES.DELETE_ITEM: {
      const existedItem = cartItems.find((item) => item.id === payload.id);
      if (existedItem.quantity <= 1) {
        return {
          ...state,
          cartItems: cartItems.filter((item) => item.id !== payload.id),
        };
      } else {
        return {
          ...state,
          cartItems: cartItems.map((item) => {
            if (item.id === payload.id)
              return { ...item, quantity: item.quantity - 1 };
            return item;
          }),
        };
      }
    }
    case ACTION_TYPES.CLEAR_ITEMS: {
      return {
        ...state,
        cartItems: cartItems.filter((item) => item.id !== payload.id),
      };
    }
    case ACTION_TYPES.SET_OPEN: {
      return { ...state, isOpen: payload };
    }
    case ACTION_TYPES.TOGGLE_OPEN: {
      return { ...state, isOpen: !state.isOpen };
    }
    default: {
      throw new Error(`type ${type} undefined`);
    }
  }
};

export default function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, INITIAL_STATE);
  // const [isOpen, setIsOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  const { isOpen, cartItems } = cartState;
  const setIsOpen = (newState) => {
    cartDispatch({
      type:
        newState === 'toggle'
          ? ACTION_TYPES.TOGGLE_OPEN
          : ACTION_TYPES.SET_OPEN,
      payload: newState,
    });
  };

  const addItemToCart = (productToAdd) => {
    cartDispatch({ type: ACTION_TYPES.ADD_ITEM, payload: productToAdd });
    // setCartItems(newAddCartItems(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    cartDispatch({ type: ACTION_TYPES.DELETE_ITEM, payload: productToRemove });
    // setCartItems(newremoveCartItems(cartItems, productToRemove));
  };

  const removeItemAllFromCart = (productToRemove) => {
    cartDispatch({ type: ACTION_TYPES.CLEAR_ITEMS, payload: productToRemove });
    // setCartItems(newremoveallCartItems(cartItems, productToRemove));
  };

  const value = {
    isOpen,
    setIsOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    removeItemAllFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
