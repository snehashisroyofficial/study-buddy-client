import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";

//context api created
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  //create new user using email
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  //google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //password reset
  const passwordResetEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  //get the current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const userLogin = { email: userEmail };
      console.log(currentUser);
      setUser(currentUser);

      setLoading(false);

      if (currentUser) {
        axios
          .post("https://study-buddy-server-mu.vercel.app/jwt", userLogin, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data));
      } else {
        axios
          .post(
            "https://study-buddy-server-mu.vercel.app/clearCookies",
            userLogin,
            {
              withCredentials: true,
            }
          )
          .then((res) => console.log(res.data));
      }
    });

    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    user,
    logOut,
    googleLogin,
    loading,
    passwordResetEmail,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
