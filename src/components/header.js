import React from 'react';
import { Link } from 'react-router-dom';
import "./components.css";

export default function header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand"><img className="logo" src="logo.png" alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link nav-style" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-style" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-style" to="/appointment">Appointment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-style" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-style" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-style nav-fancy nav-space" to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-style nav-fancy" to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}