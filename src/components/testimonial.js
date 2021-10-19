import React from "react";

export default function testimonial() {
  return (
    <div>
      <div className="container">
        <div>
          <h1>What Our Customer Says</h1>
        </div>
        <div className="testimonial-box row">
          <div className="single-testimonial col-md-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              viverra egestas ultrices in turpis. Vel in nulla porttitor
              pellentesque lacus ridiculus tellus enim, in. Dignissim elementum
              ac, consectetur nulla ultricies.
            </p>
            <div className="single-testimonial-person">
                <h5>Emon Ahmed</h5>
                <p>Developer</p>
            </div>
          </div>

          <div className="single-testimonial col-md-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              viverra egestas ultrices in turpis. Vel in nulla porttitor
              pellentesque lacus ridiculus tellus enim, in. Dignissim elementum
              ac, consectetur nulla ultricies.
            </p>
            <div className="single-testimonial-person">
                <h5>Sadia Afrin</h5>
                <p>Designer</p>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
}
