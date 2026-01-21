import React from "react";
import prog from "../assets/Programming Skills.png";
import web from "../assets/Web Technology.png";
import db from "../assets/database.png";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>

      <div className="card-grid">
        <div className="card">
          <img src={prog} alt="Programming Skills" />
          <h3>Programming Skills</h3>
          <p>Python, Java, C</p>
        </div>

        <div className="card">
          <img src={web} alt="Web Technologies" />
          <h3>Web Technologies</h3>
          <p>HTML, CSS, JavaScript</p>
        </div>

        <div className="card">
          <img src={db} alt="Database" />
          <h3>Database</h3>
          <p>MySQL</p>
        </div>
      </div>
    </section>
  );
}
