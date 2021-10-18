import "./App.css";
import initAuth from "./firebase/firebase.init";
import { useState } from "react";
import {GoogleAuthProvider,signInWithPopup,getAuth,GithubAuthProvider,signOut,createUserWithEmailAndPassword} from "firebase/auth";

initAuth();
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

function App() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const signInGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
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
    signInWithPopup(auth, githubProvider).then((result) => {
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
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  const singOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return (
  <div>
    <h1 style={{ textAlign:"center" }}>Account Details</h1>
    <div className="App">
      {!user.name ? (
        <div className="login-box">
          <div>
            <div>
              <input onBlur={handleEmail} placeholder="Email" className="input-box" type="email"/>
              <br />
              <input  onBlur={handlePassword} placeholder="Password" className="input-box" type="password"/>
              <br />
              <input onClick={signUpWithEmail} className="btn" type="submit" value="Login"/>
            </div>
            <hr />
            <button className="btn" onClick={signInGoogle}>Login With Google</button>
            <button className="btn" onClick={signInGithub}>Login With Github</button>
          </div>

          <div>
            <input placeholder="Name" className="input-box" type="text"/> <br />
            <input placeholder="Email" className="input-box" type="email"/><br />
            <input placeholder="Password" className="input-box" type="password" />
            <button className="btn">Register With Email</button>
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
            Welcome To Our Website <span className="name">{user.name}</span>{" "}
          </h1>
          <p>Your Email {user.email} </p>
          <img src={user.photo} alt="" />
        </div>
      )}
    </div>
  </div>
  );
}

export default App;