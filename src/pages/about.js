import React from "react";
import "./pages.css";

export default function about() {
  return (
    <div className="container">
      <div className="about-area mb-5">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
          Healthcare Support Limited (HSL) is one of the best kinds of
              company in the pharmaceutical industry in Bangladesh
          </p>

          <p>
          The fundamental purpose of health care is to enhance quality of
              life by enhancing health. Commercial businesses focus on creating
              financial profit to support their valuation and remain viable.
          </p>

          <p>
          Health Care Support were all very friendly and helpful. I especially loved how Drs really took his time to explain my conditions with me as well as my treatment options. I had a great visit and the doctor's demeanor has really put me at ease so I highly recommend this clinic.
          </p>
        </div>
        <div className="about-img">
          <img src="/about.svg" alt="About"></img>
        </div>
      </div>
    </div>
  );
}
