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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };


  function updateName() {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      // Profile updated!
    });
  }

  const signUpWithEmail = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;
      setError('');
      updateName();
    })
    .catch(error =>{
      setError( error.message )
    });
  };


  const signInwithEmail = () =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;
      setError('');
    })
    .catch(error =>{
      setError( error.message )
    });
  };

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
  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
    })
    .catch((error) => {
    setError(error.message);
    });
  };


  return {
    user,
    error,
    logOut,
    signInGoogle,
    loading,
    signUpWithEmail,
    setName,
    setEmail,
    setPassword,
    signInwithEmail,
    resetPassword,
    setError,
    handleEmail,
    handlePassword,
    handleName,
    error
  };
};
export default useFirebase;
