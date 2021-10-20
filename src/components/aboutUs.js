import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

export default function aboutUs() {
  // This is Extra Section ONE For Bonus
  return (
    <div>
      <div className="container">
        <div className="row  about-us">
          <div className="col-md-6 about-us-img">
            <img src="/aboutus.svg" alt="Hello Doctor" />
          </div>
          <div className="col-md-6 about-us-info">
            <h1>Hello Doctor</h1>
            <p>
              Healthcare Support Limited (HSL) is one of the best kinds of
              company in the pharmaceutical industry in Bangladesh
            </p>
            <p>
              The fundamental purpose of health care is to enhance quality of
              life by enhancing health. Commercial businesses focus on creating
              financial profit to support their valuation and remain viable.
            </p>
            <Link to="/appointment" className="nav-fancy btn" href="">
              Get Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}