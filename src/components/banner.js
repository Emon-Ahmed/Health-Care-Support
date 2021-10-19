import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

export default function banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner row">
          <div className="banner-info col-md-6">
            <h1>Health Care Support</h1>
            <p>Care Your Health & Lead A Happy Life With Your Family</p>
            <Link to="/service" className="nav-fancy btn" href="">
              Browse Services
            </Link>
          </div>
          <div className="banner-img col-md-6">
            <img src="banner.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
