import React from "react";
import "./components.css";

export default function service(props) {
  const { name, photo, description } = props.service;
  return (
    <div>
      <div className="service-box row">
        <img className="service-img col-md-6" src={photo} />
        <div className="service-box-info col-md-6">
          <h5 className="service-name">{name}</h5>
          <p>{description}</p>
          <button className="btn btn-service">Take Service</button>
        </div>
      </div>
    </div>
  );
}
