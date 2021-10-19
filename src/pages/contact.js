import React from "react";
import "./pages.css"

export default function contact() {
  return (
    <div className="container">
      <div className="contact-area">
        <div className="contact-text">
          <h1>Contact Us</h1>
          <div className="contact-form">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="btn nav-fancy">Send Message</button>
          </div>
        </div>
        <div className="contact-img">
          <img src="banner.svg" alt="contact"></img>
        </div>
      </div>
    </div>
  );
}
