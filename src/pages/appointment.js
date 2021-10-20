import React from "react";

export default function appointment() {
  return (
    <div className="container">
      <div className="contact-area mb-5">
        <div className="contact-text">
          <h1>Appointment</h1>
          <div className="contact-form">
          <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div class="mb-3">
              <label htmlFor="problem" className="form-label">
                Your Problem
              </label>
              <input
                type="text"
                class="form-control"
                id="problem"
                placeholder="Your Problem"
              />
            </div>
            <div class="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <button className="btn nav-fancy">Get Appointment</button>
          </div>
        </div>
        <div className="contact-img">
          <img src="/appointment.svg" alt="contact"></img>
        </div>
      </div>
    </div>
  );
}
