import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Login() {
  // JavaScript Object Destructuring
  const { signInGoogle, signInwithEmail, handleEmail, handlePassword, error } =
    useAuth();
  
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";
  
  // For User should not be redirected to the login
  const googleLogin = () => {
    signInGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  const emailLogin = () => {
    signInwithEmail().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div>
      <div className="container">
        <div className="contact-area mb-5">
          <div className="contact-text">
            <h1>Login</h1>
            <p>
              Already You Have Not Account? <span> </span>
              <Link to="/register">Register</Link>
            </p>
            <div className="contact-form">
              <div className="mb-3">
                <label htmlFor="loginEmail" className="form-label">
                  Email address
                </label>
                <input
                  onBlur={handleEmail}
                  type="email"
                  className="form-control"
                  id="loginEmail"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="loginPassword" className="form-label">
                  Your Password
                </label>
                <input
                  onBlur={handlePassword}
                  type="password"
                  className="form-control"
                  id="loginPassword"
                  placeholder="Your Problem"
                />
              </div>
              <p>{error}</p>
              <button onClick={emailLogin} className="btn nav-fancy">
                Login
              </button>
              <button onClick={googleLogin} className="btn nav-fancy ms-2">
                Google
              </button>
            </div>
          </div>
          <div className="contact-img">
            <img src="/account.svg" alt="contact"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
