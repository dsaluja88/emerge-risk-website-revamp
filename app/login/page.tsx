import React from 'react';
import PageHero from '@/components/PageHero';

export default function LoginPage() {
  return (
    <>
      <PageHero title="Login" />

      <section className="site-section" style={{ background: '#020307', padding: '100px 0' }}>
        <div
          className="container elementor-card"
          style={{
            maxWidth: '650px',
            textAlign: 'center',
            padding: '50px 36px',
          }}
        >
          <span className="eyebrow">EmergeAI Risk Radar</span>
          <h2 className="section-title" style={{ fontSize: '32px' }}>
            Sign in to Risk Radar
          </h2>
          <p className="section-lead" style={{ margin: '0 auto 30px auto' }}>
            The production application is hosted at aiqariskradar.com. Continue below to the secure live authentication portal.
          </p>
          <a
            className="btn hover-gradient"
            href="https://www.aiqariskradar.com/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Risk Radar Login
          </a>
        </div>
      </section>
    </>
  );
}
