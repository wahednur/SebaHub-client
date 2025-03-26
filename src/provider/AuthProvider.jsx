import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebaseConfig";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // Login with google
  const googleLogin = async () => {
    try {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  //Create User with email and password
  const createUser = async (email, password) => {
    try {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  // Login with email and password
  const loginUser = async (email, password) => {
    try {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };
  // Update user

  const updateUser = async (name, photo) => {
    try {
      setLoading(true);
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = async () => {
    try {
      return await auth.signOut();
    } catch (error) {
      console.error(error);
    }
  };
  const authInfo = {
    user,
    setUser,
    logOut,
    loading,
    setLoading,
    googleLogin,
    createUser,
    loginUser,
    updateUser,
  };

  // User auth state observer
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
