import { createContext, useEffect, useReducer } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils';

// The context will hold the actually contextual value
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = { SET_CURRENT_USER: 'SET_CURRENT_USER' };

const userReducer = (state, { type, payload }) => {
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER: {
      return { ...state, currentUser: payload };
    }
    default: {
      throw new Error(`Unhandled type ${type} in userReducer`);
    }
  }
};
const INITIAL_STATE = { currentUser: null };

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [state, userDispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  const setCurrentUser = (user) => {
    userDispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
