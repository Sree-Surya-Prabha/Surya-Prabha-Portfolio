import React from "react";
import "./Internships.css";

// ✅ ALL imports MUST be here (top of file)
import webDev from "../assets/web-development.png";
import aiMl from "../assets/ai-ml.png";
import sureProEd from "../assets/sure-proed.png";

export default function Internships() {
  return (
    <section id="internships" className="section">
      <h2 className="section-title">Internships</h2>

      <div className="internship-grid">

        <div className="internship-card">
          <img src={webDev} alt="Web Development Internship" />
          <h3>Web Development Intern</h3>
          <p>
            Completed a Web Development Internship focusing on HTML, CSS,
            JavaScript, and responsive web design.
          </p>
        </div>

        <div className="internship-card">
          <img src={aiMl} alt="AI and Machine Learning Internship" />
          <h3>AI & ML Intern</h3>
          <p>
            Completed an AI & ML internship under SmartBridge in collaboration
            with APSCHE, gaining hands-on experience in machine learning concepts.
          </p>
        </div>

        <div className="internship-card">
          <img src={sureProEd} alt="Sure ProEd Internship" />
          <h3>Full Stack Web Development</h3>
          <p>
            Industry-oriented training program with hands-on experience in
            full stack web development.
          </p>
        </div>

      </div>
    </section>
  );
}
