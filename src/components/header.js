import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import "./components.css";

export default function Header() {
  const { user, logOut } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img className="logo" src="/logo.png" alt="LOGO" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link nav-style" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-style" to="/services">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-style" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-style" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-style" to="/appointment">
                Appointment
              </Link>
            </li>
          </ul>
          <div>
            {user.displayName ? (
              <ul className="navbar-nav">
                <li>
                  <Link
                    className="nav-link nav-style nav-fancy nav-space"
                    to="/profile">
                    {user.displayName}'s Profile
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={logOut}
                    className="nav-link nav-style nav-fancy nav-space"
                    to="/login">
                    Logout
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav">
                <li>
                  <Link
                    className="nav-link nav-style nav-fancy nav-space"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
