import React from "react";
import profile from "../assets/profile.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-wrapper">

        <img src={profile} alt="Profile" className="hero-profile" />

        <h1 className="hero-title">
          Hi, I'm <span>Sree Surya Prabha</span>
        </h1>

        <h2 className="hero-role">
          Frontend Engineer & IoT Enthusiast
        </h2>

        <p className="hero-desc">
          Passionate about building modern, reliable, and user-friendly web
          applications with strong problem-solving skills and clean UI design.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="hero-btn primary">Get In Touch</a>
          <a href="/resume.pdf" className="hero-btn outline" download>
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}
