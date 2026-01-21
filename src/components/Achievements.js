import React from "react";
import "./Achievements.css";

import hackathon from "../assets/hackathon.png";
import cultural from "../assets/cultural.png";
import swarna from "../assets/swarna.png";

export default function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <h2 className="section-title">Achievements & Awards</h2>

      <div className="achievement-grid">
        <div className="achievement-card">
          <img src={hackathon} alt="Hackathon" />
          <h3>24-Hour Hackathon</h3>
          <p>
            Participated in <strong>Siddharth HackFest 2K25</strong> at
            Siddharth Institute of Engineering & Technology.
          </p>
        </div>

        <div className="achievement-card">
          <img src={cultural} alt="Cultural Fest" />
          <h3>Cultural Fest Volunteer</h3>
          <p>
            Volunteered at Cultural Fest at
            Siddhartha Institute of Science and Technology, Puttur.
          </p>
        </div>

        <div className="achievement-card">
          <img src={swarna} alt="Swarna Andhra" />
          <h3>Swarna Andhra</h3>
          <p>
            Participated in <strong>Swarna Andhra</strong> initiative by
            SWARNAANDHRABY2047.
          </p>
        </div>
      </div>
    </section>
  );
}
