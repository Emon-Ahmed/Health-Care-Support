import React from "react";
import "./pages.css";

export default function about() {
  return (
    <div className="container">
      <div className="about-area">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Education refers to the discipline that is concerned with methods of
            teaching and learning in schools or school-like environments.
          </p>

          <p>
            Education is the process of facilitating learning, or the
            acquisition of knowledge, skills, values, morals, beliefs, and
            habits. Educational methods include teaching, training,
            storytelling, discussion and directed research.We are the voice of
            teachers and education workers around the world.Through our 386
            member organisations, we represent more than 32.5 million teachers
          </p>

          <p>
            Get a learning boost with thousands of worksheets, games, lesson
            plans, and more from our library of printable and digital resources
            for preschool
          </p>
        </div>
        <div className="about-img">
          <img src="about.svg" alt="About"></img>
        </div>
      </div>
    </div>
  );
}
