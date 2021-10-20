import React from "react";
import "./pages.css"

export default function contact() {
  return (
    <div className="container">
      <div className="contact-area mb-5">
        <div className="contact-text">
          <h1>Contact Us</h1>
          <div className="contact-form">
            <div class="mb-3">
              <label htmlFor="emailAddress" class="form-label">Email address</label>
              <input type="email" class="form-control" id="emailAddress" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
              <label htmlFor="message" class="form-label">Your Message</label>
              <textarea placeholder="Your Message" class="form-control" id="message" rows="3"></textarea>
            </div>
            <button className="btn nav-fancy">Send Message</button>
          </div>
        </div>
        <div className="contact-img">
          <img src="/contact.svg" alt="contact"></img>
        </div>
      </div>
    </div>
  );
}
