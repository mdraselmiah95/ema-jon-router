import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      console.log(result.user);
      //   setUser(result.user);
    });
  };

  const logOut = () => {
    signOut(auth).then(() => {});
  };

  // observe whether user auth state changed or not

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
