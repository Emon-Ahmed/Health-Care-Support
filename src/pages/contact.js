import React from "react";
import "./pages.css"

export default function contact() {
  return (
    <div className="container">
      <div className="contact-area">
        <div className="contact-text">
          <h1>Contact Us</h1>
          <div className="contact-form">
            <div>
              <div className="mb-3 input-from">
                <label>Email Address</label>
                <input type="email" placeholder="name@example.com" />
              </div>
              <div className="mb-3 input-from">
                <label>Your Message</label>
                <textarea  placeholder="Your Message" />
              </div>
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
