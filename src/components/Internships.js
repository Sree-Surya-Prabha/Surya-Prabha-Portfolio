import React from "react";
import "./Internships.css";

import smartbridge from "../assets/smartbridge.png";
import webdev from "../assets/web-dev.png";
import sureproed from "../assets/sureproed.png";

export default function Internships() {
  return (
    <section className="internships" id="internships">
      <h2 className="section-title">Internships</h2>

      <div className="internship-grid">
        <div className="internship-card">
          <img src={smartbridge} alt="AI ML Internship" />
          <h3>AI & ML Internship</h3>
          <p>
            <strong>SmartBridge & APSCHE</strong><br />
            Completed AI & ML internship focusing on Machine Learning concepts,
            real-world problem solving, and practical implementation.
          </p>
        </div>

        <div className="internship-card">
          <img src={webdev} alt="Web Development Internship" />
          <h3>Web Development Internship</h3>
          <p>
            <strong>Frontend Development</strong><br />
            Focused on HTML, CSS, JavaScript and responsive web design.
          </p>
        </div>

        <div className="internship-card">
          <img src={sureproed} alt="Sure ProEd" />
          <h3>SURE ProEd</h3>
          <p>
            Industry-oriented Full Stack Web Development training with
            hands-on projects and practical skill development.
          </p>
        </div>
      </div>
    </section>
  );
}
