'use client';

import React from 'react';

export default function CTASection() {
  const handleOpenRegister = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('open-register'));
    }
  };

  return (
    <section style={{ padding: '0 0 80px 0', background: '#020307' }}>
      <div className="container">
        <div className="cta-banner">
          <h2 className="cta-title">Unlock the Power of AI for Your Business</h2>
          <p className="cta-desc">
            Tap into cutting-edge SaaS tools powered by artificial intelligence.
          </p>

          <div className="cta-buttons">
            <button
              type="button"
              className="btn hover-gradient"
              onClick={handleOpenRegister}
            >
              Get Started
            </button>
            <a
              href="https://emergeaitech.com/connect/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
