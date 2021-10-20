import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

export default function service(props) {
  // JavaScript Object Destructuring
  const { key, name, photo, description } = props.service;
  
  return (
    <div>
      <div className="service-box row">
        <img className="service-img col-md-6" src={photo} />
        <div className="service-box-info col-md-6">
          <h5 className="service-name">{name}</h5>
          <p>{description}</p>
          <Link to={`/singleservice/${key}`} className="btn btn-service">
            Take Service
          </Link>
        </div>
      </div>
    </div>
  );
}
