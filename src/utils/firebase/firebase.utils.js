import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2gyi1eCHZ0wYcKzG8xSKuhF4MYUFiVO8",
  authDomain: "crwn-my-db-abc44.firebaseapp.com",
  projectId: "crwn-my-db-abc44",
  storageBucket: "crwn-my-db-abc44.appspot.com",
  messagingSenderId: "882651709034",
  appId: "1:882651709034:web:1a7c9465d87667e0451413",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const sighInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const signInUserWithEmail = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additional) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  // if not exist, create /set the user data document in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additional,
      });
    } catch (error) {
      console.log("error creating the user: " + error);
    }
  }
  // if exist, return
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  signOut(auth);
};

export const onAuthStateChangedListener = (callcack) => {
  if (!callcack) return;
  return onAuthStateChanged(auth, callcack);
};
