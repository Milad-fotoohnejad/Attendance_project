// src/auth.js
import { auth, db } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// Sign up new users
export const signUp = async (email, password, role, userData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Store user data in Firestore
    await setDoc(doc(db, role, user.uid), {
      ...userData,
      email: user.email,
    });

    return user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

// Sign in existing users
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

// Sign out users
export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};
