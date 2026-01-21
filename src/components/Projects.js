import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <img src="/projects/rice.png" alt="Rice Detection" />
          <h3>Rice Detection Technique</h3>
          <p>Image processing based system for rice quality analysis.</p>
        </div>

        <div className="project-card">
          <img src="/projects/exam.png" alt="Exam Protection" />
          <h3>Electronic Exam Paper Protection</h3>
          <p>Secure exam paper system using Arduino (C/C++).</p>
        </div>

        <div className="project-card">
          <img src="/projects/sleep.png" alt="Sleep Detection" />
          <h3>Smart Sleep Disorder Detection</h3>
          <p>IoT-based real-time sleep monitoring using ESP32.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
