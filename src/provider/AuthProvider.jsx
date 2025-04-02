import axios from "axios";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";
import auth from "../firebase/firebaseConfig";
import { apiUrl } from "../hooks/userServerAPI";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // Login with google
  const googleLogin = async () => {
    try {
      setLoading(true);
      return await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  //Create User with email and password
  const createUser = async (email, password) => {
    try {
      setLoading(true);
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  // Login with email and password
  const loginUser = async (email, password) => {
    try {
      setLoading(true);
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };
  // Update user

  const updateUser = async (name, photo) => {
    try {
      setLoading(true);
      return await updateProfile(auth.currentUser, {
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
    const checkAuthStatus = async () => {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = { email: userEmail };

        setUser(currentUser);
        setLoading(false);
        if (currentUser?.email) {
          try {
            const { data } = await axios.post(`${apiUrl}/jwt`, loggedUser, {
              withCredentials: true,
            });
          } catch (error) {
            console.error(error);
          }
        } else {
          try {
            const { data } = axios.post(
              `${apiUrl}/logout`,
              {},
              { withCredentials: true }
            );
          } catch (err) {
            console.log(err.message);
          }
        }
      });
      return () => unsubscribe();
    };
    checkAuthStatus();

    // const unsubscribe = auth.onAuthStateChanged((currentUser) => {
    //   setUser(currentUser);
    //   const loggedUser = currentUser?.email || user?.email;
    //   const userEmail = { email: loggedUser };

    //   setLoading(false);
    //   axios
    //     .post(`${apiUrl}/jwt`, userEmail, { withCredentials: true })
    //     .then((res) => {
    //       console.log("Token response", res.data);
    //     });
    // });
    // return () => unsubscribe();
  }, [user?.email]);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
