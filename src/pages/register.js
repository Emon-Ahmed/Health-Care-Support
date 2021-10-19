import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <div className="container">
        <div className="contact-area">
          <div className="contact-text">
            <h1>Register</h1>
            <p> Already You Have Account ? <Link to="/login">Login </Link> </p>
            <div className="contact-form">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Your Password"
                />
              </div>
              <button className="btn nav-fancy">Registration</button>
              <button className="btn nav-fancy ms-2">Registration With Google</button>
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
