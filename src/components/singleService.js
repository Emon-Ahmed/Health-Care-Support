import React from "react";
import { useParams } from "react-router";
import "./components.css";

export default function Singleservice(params) {
  const { serviceID} =useParams();
  return (
    <div>
      <div className="container">
        <div className="single-service"><h1>This is  {serviceID} </h1></div>
      </div>
    </div>
  );
}
