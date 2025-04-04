import { auth, db } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const signUp = async (email, password, role, userData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Build the user document dynamically to avoid undefined fields
    const userDoc = {
      ...userData,
      email: user.email,
      role,
      createdAt: new Date().toISOString(),
    };

    if (role === "student") {
      userDoc.enrolledClassIds = [];
    }

    if (role === "instructor") {
      userDoc.teachingClassIds = [];
    }

    await setDoc(doc(db, "users", user.uid), userDoc);

    return user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

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

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};
