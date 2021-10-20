import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Register() {
  // JavaScript Object Destructuring
  const {
    signUpWithEmail,
    signInwithEmail,
    handleEmail,
    handlePassword,
    handleName,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";
  // For User should not be redirected to the login
  const emailRegister = () => {
    signUpWithEmail().then((result) => {
      history.push(redirect_uri);
    });
    signInwithEmail();
  };

  return (
    <div>
      <div className="container">
        <div className="contact-area mb-5">
          <div className="contact-text">
            <h1>Register</h1>
            <p>
              Already You Have Account?<span> </span>
              <Link to="/login">Login </Link>{" "}
            </p>
            <div className="contact-form">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Your Name
                </label>
                <input
                  onBlur={handleName}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  onBlur={handleEmail}
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Password
                </label>
                <input
                  onBlur={handlePassword}
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Your Password"
                />
              </div>
              <button onClick={emailRegister} className="btn nav-fancy">
                Registration
              </button>
              <button className="btn nav-fancy ms-2">Google</button>
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
