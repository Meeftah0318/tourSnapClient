import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from "../Firebase/firebase.init";

initAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then(result => {
      setUser(result.user);
      console.log(result.user);
    });
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(
    () =>
      onAuthStateChanged(auth, user => {
        if (user) {
          setUser(user);
        }
      })
    // []
  );

  return {
    user,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;
