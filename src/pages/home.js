import React, { useEffect, useState } from "react";
import Banner from "../components/banner";
import AboutUs from "../components/aboutUs";
import "./pages.css";
import Service from "../components/service";
import Testimonial from "../components/testimonial";
import Newsletter from "../components/newsletter";

export default function Home() {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch('/fakeData.json')
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <div className="container">
        <div className="service">
          <h1 className="service-title">Our Services</h1>
          <div className="service-list">
            {service.map((service) => (
              <Service key={service.key} service={service}></Service>
            ))}
          </div>
        </div>
      </div>

      <Testimonial></Testimonial>
      <Newsletter></Newsletter>
    </div>
  );
}
