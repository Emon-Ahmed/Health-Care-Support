import React from "react";

export default function appointment() {
  return (
    <div className="container">
      <div className="contact-area">
        <div className="contact-text">
          <h1>Appointment</h1>
          <div className="contact-form">
          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Your Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Your Name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Your Problem
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Your Problem"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <button className="btn nav-fancy">Registration</button>
          </div>
        </div>
        <div className="contact-img">
          <img src="banner.svg" alt="contact"></img>
        </div>
      </div>
    </div>
  );
}
