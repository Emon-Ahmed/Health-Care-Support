import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";

export default function Register() {
  const { signUpWithEmail, handleEmail, handlePassword, handleName } = useFirebase();

  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  // };
  // const handleName = (e) => {
  //   setName(e.target.value);
  // };

  return (
    <div>
      <div className="container">
        <div className="contact-area">
          <div className="contact-text">
            <h1>Register</h1>
            <p>
              {" "}
              Already You Have Account ? <Link to="/login">Login </Link>{" "}
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
              <button onClick={signUpWithEmail} className="btn nav-fancy">
                Registration
              </button>
              <button className="btn nav-fancy ms-2">
                Registration With Google
              </button>
            </div>
          </div>
          <div className="contact-img">
            <img src="banner.svg" alt="contact"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
