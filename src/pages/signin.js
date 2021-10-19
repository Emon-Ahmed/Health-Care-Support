import "./pages.css";
import initAuth from "../firebase/firebase.init";
import { useState } from "react";
import {GoogleAuthProvider,signInWithPopup,getAuth,GithubAuthProvider,signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail,updateProfile } from "firebase/auth";

initAuth();
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

function Signin() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  }

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
    });
  };

  const signInGithub = () => {
    signInWithPopup(auth, githubProvider)
    .then((result) => {
      const { displayName, photoURL, email } = result.user;
      const loggedInUser = {
        name: displayName,
        email: email,
        photo: photoURL,
      };
      setUser(loggedInUser);
    });
  };

  const signUpWithEmail = () => {
    if( password.length < 6  ){
      setError( "Password Should Be 6 Char, OK" );
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;
      setError('');
      updateName();
      console.log(user);
    })
    .catch(error =>{
      setError( error.message )
    });
  };

  const signInwithEmail = () =>{
    signInWithEmailAndPassword(auth, email, password)
    .then( result=>{
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
  
  function updateName() {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      // Profile updated!
    });
  }
  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
    })
    .catch((error) => {
    setError(error.message);
    });
  };

  const singOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return (
  <div className="container">
    <h1 style={{ textAlign:"center"}}>Account Registration</h1>
    <div className="App">
      {!user.name ? (
        <div className="login-box">
          <div>
            <div>
              <input onBlur={handleEmail} placeholder="Email" className="input-box" type="email"/><br />
              <input onBlur={handlePassword} placeholder="Password" className="input-box" type="password"/><br />
              <input onClick={signInwithEmail} className="btn" type="submit" value="Login"/>
              <input onClick={resetPassword} className="btn" type="submit" value="Reset Password"/>
            </div>
            <hr />
            <button className="btn" onClick={signInGoogle}>Login With Google</button>
            <button className="btn" onClick={signInGithub}>Login With Github</button>
          </div>

          <div>
            <input onBlur={handleName} placeholder="Name" className="input-box" type="text"/> <br />
            <input onBlur={handleEmail} placeholder="Email" className="input-box" type="email" /><br />
            <input onBlur={handlePassword} placeholder="Password" className="input-box" type="password" id="password"/>
            <button onClick={signUpWithEmail} className="btn">Register With Email</button>
            <small style={{color:"red"}}>{error}</small>
          </div>
        </div>
      ) : (
        <div>
          <button className="btn btn-out" onClick={singOut}>
            Sing Out
          </button>
        </div>
      )}
      {user.name && (
        <div>
          <h1>
            Welcome To Our Website <span className="name">{user.name}</span>
          </h1>
          <p>Your Email {user.email} </p>
          <img src={user.photo} alt="" />
        </div>
      )}
    </div>
  </div>
  );
}

export default Signin;