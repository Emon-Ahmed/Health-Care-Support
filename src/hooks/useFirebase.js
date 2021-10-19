import { useEffect, useState } from "react"
import initAuth from "../firebase/firebase.init"
import {GoogleAuthProvider,signInWithPopup,getAuth,GithubAuthProvider,signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail,updateProfile, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";

initAuth();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("");

    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          const { displayName, photoURL, email } = result.user;
          const loggedInUser = {
            name: displayName,
            email: email,
            photo: photoURL,
          };
          setUser(loggedInUser);
        })
        .catch(error =>{
            setError( error.message )
          });
      };
      useEffect ( ()=>{
          onAuthStateChanged(auth, user=>{
              if(user){
                  console.log("LOGED", user);
                  setUser(user);
              }
          })
      }  );
      const logOut = () => {
        signOut(auth).then(() => {
          setUser({});
        });
      };
      return{
          user,
          error,
          logOut,
        signInGoogle
      }

}
export default useFirebase;