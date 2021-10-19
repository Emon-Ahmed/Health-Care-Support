import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

export default function aboutUs() {
  return (
    <div>
      <div className="container">
        <div className="row  about-us">
          <div className="col-md-6 about-us-img">
            <img src="about.svg" alt="" />
          </div>
          <div className="col-md-6 about-us-info">
            <h1>Hello Doctor</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              maxime eum nobis. Atque dolore, mollitia magnam suscipit sed non
              itaque quo accusamus! Dignissimos, quod maiores.{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              maxime eum nobis. Atque dolore, mollitia magnam suscipit sed non
              itaque quo accusamus! Dignissimos, quod maiores.{" "}
            </p>
            <Link to="/service" className="nav-fancy btn" href="">
              Get Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
