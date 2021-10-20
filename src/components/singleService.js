import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./components.css";
import FakeData from "../DB/fakeData.json";

export default function Singleservice() {
  const { serviceID } = useParams();
  const service = FakeData.find((item) => item.key == serviceID);
  const { name } = service;

  return (
    <div>
      <div className="container">
        <div className="single-service">
          <h1>This is {serviceID} </h1>
          <h1>This is {name} </h1>
        </div>
      </div>
    </div>
  );
}
