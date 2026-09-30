import React from 'react';
import PageHero from '@/components/PageHero';
import { APP_URL } from '@/lib/site';

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
            Continue below to the secure EmergeAI Risk Radar application.
          </p>
          <a
            className="btn hover-gradient"
            href={`${APP_URL}/login`}
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
