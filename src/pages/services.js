import React from "react";
import "./pages.css";
import Service from "../components/service";
import { useEffect, useState } from "react";

export default function Services() {
  //For Dynamic Data Shows From Local JSON Files
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="service my-5">
          <h1 className="service-title">Our Services</h1>
          <div className="service-list">
            {service.map((service) => (
              <Service key={service.key} service={service}></Service>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
