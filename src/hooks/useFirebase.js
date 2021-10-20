import { useEffect, useState } from "react";
import initAuth from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

initAuth();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider)
    .finally(() => { setLoading(false) });;
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }else {
        setUser({});
    }
    setLoading(false);
    });
  }, []);
  const logOut = () => {
    setLoading(true);
    signOut(auth).then(() => setUser({}))
    .finally(() => setLoading(false))
  };
  return {
    user,
    error,
    logOut,
    signInGoogle,
    loading
  };
};
export default useFirebase;
