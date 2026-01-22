import React from "react";
import "./Achievements.css";

// Import images from src/assets
import hackathon from "../assets/hackfest.png";
import cultural from "../assets/cultural.png";
import swarnaAndhra from "../assets/swarna-andhra.png";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <h2 className="section-title">Achievements & Awards</h2>

      <div className="achievements-grid">

        {/* Hackathon */}
        <div className="achievement-card">
          <img src={hackathon} alt="24 Hour Hackathon Participation" />
          <h3>24-Hour Hackathon</h3>
          <p>
            Participated in <strong>Siddharth HackFest 2K25</strong>, a 24-hour
            hackathon conducted at Siddharth Institute of Engineering &
            Technology, gaining hands-on problem-solving experience.
          </p>
        </div>

        {/* Cultural Fest */}
        <div className="achievement-card">
          <img src={cultural} alt="Cultural Fest Volunteering" />
          <h3>Cultural Fest Volunteer</h3>
          <p>
            Volunteered at the Cultural Fest organized at Siddhartha Institute
            of Science and Technology, Puttur, contributing to event
            coordination and team collaboration.
          </p>
        </div>

        {/* Swarna Andhra */}
        <div className="achievement-card">
          <img src={swarnaAndhra} alt="Swarna Andhra Participation" />
          <h3>Swarna Andhra Participation</h3>
          <p>
            Actively participated in the <strong>Swarna Andhra</strong> initiative
            by SwarnaAndhra2047, promoting innovation, development, and
            community engagement.
          </p>
        </div>

      </div>
    </section>
  );
}
