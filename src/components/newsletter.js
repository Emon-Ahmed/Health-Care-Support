import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

export default function newsletter() {
  return (
    <div>
      <div className="container">
        <div className="newsletter row">
          <div className="newsletter-info col-md-9"> 
            <h3>Don't Feel Better, Need An Doctor ??? </h3>
          </div>
          <Link to="/register" className="newsletter-btn btn nav-fancy col-md-3">Register Now</Link>
        </div>
      </div>
    </div>
  );
}
