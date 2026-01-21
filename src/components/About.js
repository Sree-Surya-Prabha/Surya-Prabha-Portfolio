import React from "react";
import "./About.css";
import aboutImg from "../assets/about-me.png";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-card center-layout">
        <img src={aboutImg} alt="About Me" className="about-image" />

        <div className="about-content">
          <p>
            I am a <span>Computer Science student</span> passionate about
            <span> Web Development</span>, <span>IoT Systems</span>, and building
            <span> real-time applications</span>.
          </p>

          <p>
            I enjoy creating clean, efficient, and user-friendly digital
            solutions with a strong focus on UI design, performance, and
            problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
}
