import './App.css';
import {GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import initAuth from './firebase/firebase.init';
import { useState } from 'react';

initAuth();

const provider = new GoogleAuthProvider();
function App() {
  const [ user, setUser ] = useState({})
  const signInGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then( result => {
      const {displayName, photoURL, email} = result.user;
      const loggedInUser = {
        name  : displayName,
        email : email,
        photo : photoURL
      };
      setUser(loggedInUser);
    } )

  }
  return (
    <div className="App">
      <button onClick={signInGoogle}>Login With Google</button>
      { 
        user.email && <div> <h1>Welcome To Our Website {user.name} </h1>
        <p>Your Email {user.email} </p> 
        <img src={user.photo} alt="" /></div>
      }
      
    </div>
  );
}

export default App;