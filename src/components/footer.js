import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

export default function footer() {
  return (
    <div className="container">
      <div className="footer-area">
        <hr />
        <div className="row main-footer">
          <div className="col-md-4">
            <img src="/logo.png" alt="" />
            <p className="pt-4"> Copyright &copy; 2021 All Rights Reserved</p>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="footer col-md-4">
                <h5>Menu</h5>
                <Link to="/" className="footer-text">
                  Home
                </Link>
                <Link to="/services" className="footer-text">
                  Services
                </Link>
                <Link to="/about" className="footer-text">
                  About
                </Link>
                <Link to="/contact" className="footer-text">
                  Contact
                </Link>
              </div>
              <div className="footer col-md-4">
                <h5>Services</h5>
                <Link to="/singleservice/1" className="footer-text">
                  Cancer
                </Link>
                <Link to="/singleservice/3" className="footer-text">
                  Diagnostic
                </Link>
                <Link to="/singleservice/4" className="footer-text">
                  Dental
                </Link>
                <Link to="/singleservice/5" className="footer-text">
                  Eye Care
                </Link>
              </div>
              <div className="footer col-md-4">
                <h5>Social Links</h5>
                <Link to="/contact" className="footer-text">
                  Facebook
                </Link>
                <Link to="/contact" className="footer-text">
                  Instagram
                </Link>
                <Link to="/contact" className="footer-text">
                  Twitter
                </Link>
                <Link to="/contact" className="footer-text">
                  Linkdin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}