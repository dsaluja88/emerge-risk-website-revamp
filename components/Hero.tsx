import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Hero">
      <div className="hero-video-container">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/home-risk-radar-updated.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-pill">
          <span>Powered by Agentic AI</span>
        </div>

        <h1 className="hero-title">
          EmergeAI Risk Radar
        </h1>

        <p className="hero-subtitle">
          AI-powered software risk assessment tool for release pipelines.
        </p>
      </div>
    </section>
  );
}
