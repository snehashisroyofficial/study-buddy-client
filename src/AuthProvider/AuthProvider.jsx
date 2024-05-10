import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";

//context api created
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  //create new user using email
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signin new user using email
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //get the current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { createUser, signInUser, user };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
