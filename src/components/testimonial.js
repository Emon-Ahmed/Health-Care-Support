import React from "react";

export default function testimonial() {
  //This is Extra Section TWO For Bonus
  return (
    <div className="container">
      <div className="testimonial">
        <div className="testimonial-title">
          <h1 className="header-fancy">What Our Customer Says</h1>
        </div>
        <div className="testimonial-box row g-5">
          <div className="col-md-6">
            <div className="single-testimonial">
              <p>
                Health Care Support were all very friendly and helpful. I
                especially loved how Drs really took his time to explain my
                conditions with me as well as my treatment options. I had a
                great visit and the doctor's demeanor has really put me at ease
                so I highly recommend this clinic.
              </p>
              <div className="single-testimonial-person">
                <h5>Sadia Afrin</h5>
                <p>Designer</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="single-testimonial">
              <p>
                From his excellent treatment, curiosity, investigative mind and
                ability to connect, you know where you stand immediately and
                what next steps look like. Attention doctors if you want a
                masterclass in watching a doctor bring medical knowledge and
                build rapport so that message is heard by patient.
              </p>
              <div className="single-testimonial-person">
                <h5>Emon Ahmed</h5>
                <p>Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
