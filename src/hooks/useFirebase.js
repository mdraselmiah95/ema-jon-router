import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      console.log(result.user);
      setUser(result.user);
    });
  };
};
